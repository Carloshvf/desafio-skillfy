import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";

import type { Task } from "../../types/Task";
import { useSuggestions } from "../../hooks/useSuggestions";
import { deleteTask } from "../../services/api";
import PriorityBadge from "../PriorityBadge";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: suggestions } = useSuggestions();

  const suggestion = suggestions?.find(
    (s) => Number(s.task_id) === Number(task.id)
  );
  const bestTime = suggestion?.suggested_times.sort(
    (a, b) => b.score - a.score
  )[0];

  const deleteMutation = useMutation({
    mutationFn: () => deleteTask(task.id),
    onSuccess: () => {
      alert("Tarefa excluída.");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: () => alert("Erro ao excluir."),
  });

  const handleDelete = () => {
    if (confirm("Deseja realmente excluir esta tarefa?")) {
      deleteMutation.mutate();
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow space-y-2 relative">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <PriorityBadge priority={task.priority} />
      </div>

      <p className="text-sm text-gray-700">{task.description}</p>

      <div className="text-sm text-gray-600">
        <strong>Status:</strong> {task.status}
      </div>

      {bestTime && (
        <div className="text-sm text-gray-600">
          <strong>Melhor horário:</strong>{" "}
          {format(new Date(bestTime.start), "HH:mm")} -{" "}
          {format(new Date(bestTime.end), "HH:mm")}
        </div>
      )}

      <div className="flex justify-end gap-4 mt-2">
        <button
          onClick={() => navigate(`/editar-tarefa/${task.id}`)}
          className="text-sm text-primary underline"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="text-sm text-red-500 underline"
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
