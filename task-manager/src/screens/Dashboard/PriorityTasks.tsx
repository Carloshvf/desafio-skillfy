import TaskCard from "../../components/TaskCard";
import { useTasks } from "../../hooks/useTasks";
import type { Task } from "../../types/Task";

const PriorityTasks = () => {
  const { data: tasks, isLoading, error } = useTasks();

  const highPriorityTasks = (tasks || []).filter(
    (task: Task) => task.priority === "high"
  );

  if (isLoading) return <p>Carregando tarefas prioritárias...</p>;
  if (error) return <p>Erro ao carregar tarefas prioritárias.</p>;

  return (
    <section>
      <h2 className="text-primary text-xl font-bold mb-4">
        Tarefas Prioritárias
      </h2>

      {highPriorityTasks.length === 0 ? (
        <p className="text-gray-500">Nenhuma tarefa prioritária encontrada.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highPriorityTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PriorityTasks;
