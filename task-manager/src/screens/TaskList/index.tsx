import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import TaskCard from "../../components/TaskCard";
import type { Task } from "../../types/Task";
import TaskFilters from "../../components/CategoryFilter";
import TaskSorter from "./TaskSorter";

const TaskList = () => {
  const { data: tasks, isLoading, error } = useTasks();

  const [filters, setFilters] = useState({
    priority: "",
    category: "",
    status: "",
  });

  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState("");

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredTasks = (tasks || []).filter((task) => {
    return (
      (!filters.priority || task.priority === filters.priority) &&
      (!filters.category || task.category === filters.category) &&
      (!filters.status || task.status === filters.status)
    );
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sortBy) {
      case "deadline":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      case "priority":
        const priorityMap = { high: 1, medium: 2, low: 3 };
        return priorityMap[a.priority] - priorityMap[b.priority];
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  if (isLoading) return <p>Carregando tarefas...</p>;
  if (error) return <p>Erro ao carregar tarefas.</p>;

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-4">Lista de Tarefas</h1>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-primary">Filtros</h1>
        <button
          onClick={() => navigate("/nova-tarefa")}
          className="bg-primary text-white px-4 py-2 rounded text-sm"
        >
          Nova Tarefa
        </button>
      </div>

      <TaskFilters filters={filters} onChange={handleFilterChange} />
      <TaskSorter sortBy={sortBy} onChange={setSortBy} />

      {sortedTasks.length === 0 ? (
        <p className="text-gray-500">Nenhuma tarefa encontrada.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedTasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TaskList;
