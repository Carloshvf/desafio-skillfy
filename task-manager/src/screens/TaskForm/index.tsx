import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createTask,
  deleteTask,
  getTask,
  postSuggestTime,
  updateTask,
} from "../../services/api";
import { useUserPreferences } from "../../contexts/UserPreferencesContext";
import type { Task } from "../../types/Task";

import TaskFields from "./TaskFields";
import TimeSuggestions from "./TimeSuggestions";
import TaskPreview from "./TaskPreview";
import FormActions from "./FormActions";

const TaskForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const { preferences } = useUserPreferences();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "work",
    priority: "medium",
    estimated_duration: 60,
    deadline: "",
    reminders: false,
  });

  const [suggestions, setSuggestions] = useState<
    { start: string; end: string; score: number }[]
  >([]);

  const { data: taskData } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTask(Number(id)),
    enabled: isEditMode,
  });

  useEffect(() => {
    if (taskData) {
      setFormData({
        ...taskData,
        deadline: taskData.deadline.slice(0, 16),
        reminders: false,
      });
    }
  }, [taskData]);

  const mutation = useMutation({
    mutationFn: () => {
      const payload: Omit<Task, "id"> = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        priority: formData.priority as Task["priority"],
        estimated_duration: Number(formData.estimated_duration),
        deadline: new Date(formData.deadline).toISOString(),
        status: isEditMode ? (taskData?.status ?? "pending") : "pending",
      };

      return isEditMode ? updateTask(Number(id), payload) : createTask(payload);
    },
    onSuccess: () => {
      alert(isEditMode ? "Tarefa atualizada!" : "Tarefa criada!");
      navigate("/tarefas");
    },
    onError: () => alert("Erro ao salvar."),
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteTask(Number(id)),
    onSuccess: () => {
      alert("Tarefa excluída.");
      navigate("/tarefas");
    },
  });

  const handleSuggest = async () => {
    try {
      const payload = {
        task: {
          title: formData.title,
          priority: formData.priority as Task["priority"],
          estimated_duration: Number(formData.estimated_duration),
          deadline: new Date(formData.deadline).toISOString(),
          category: formData.category,
        },
        user_preferences: preferences,
      };
      const res = await postSuggestTime(payload);
      setSuggestions(res);
    } catch (err) {
      console.error("Erro ao sugerir horário", err);
    }
  };

  return (
    <section className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-primary">
        {isEditMode ? "Editar Tarefa" : "Nova Tarefa"}
      </h1>

      <TaskFields formData={formData} setFormData={setFormData} />
      <TimeSuggestions suggestions={suggestions} onSuggest={handleSuggest} />
      <TaskPreview formData={formData} />
      <FormActions
        isEditMode={isEditMode}
        isSaving={mutation.isPending}
        onSave={() => mutation.mutate()}
        onDelete={
          isEditMode
            ? () => {
                if (confirm("Deseja excluir esta tarefa?")) {
                  deleteMutation.mutate();
                }
              }
            : undefined
        }
      />
    </section>
  );
};

export default TaskForm;
