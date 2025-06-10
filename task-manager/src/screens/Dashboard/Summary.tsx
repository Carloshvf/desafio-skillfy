import { useTasks } from "../../hooks/useTasks";

const Summary = () => {
  const { data: tasks, isLoading, error } = useTasks();

  const total = tasks?.length || 0;
  const completed = (tasks || []).filter((t) => t.status === "done").length;
  const pending = (tasks || []).filter((t) => t.status !== "done").length;

  if (isLoading) return <p>Carregando resumo...</p>;
  if (error) return <p>Erro ao carregar o resumo.</p>;

  return (
    <section className="mb-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-primary">Resumo do Dia</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-gray-500 text-sm">Total</p>
          <p className="text-2xl font-semibold">{total}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Concluídas</p>
          <p className="text-2xl font-semibold text-green-600">{completed}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Pendentes</p>
          <p className="text-2xl font-semibold text-red-500">{pending}</p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
