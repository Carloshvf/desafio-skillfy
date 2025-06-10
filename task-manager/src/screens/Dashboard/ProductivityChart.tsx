import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTasks } from "../../hooks/useTasks";
import theme from "../../styles/theme";

const ProductivityChart = () => {
  const { data: tasks, isLoading, error } = useTasks();

  const counts = {
    pending: 0,
    "in-progress": 0,
    done: 0,
  };

  (tasks || []).forEach((task) => {
    if (counts[task.status as keyof typeof counts] !== undefined) {
      counts[task.status as keyof typeof counts]++;
    }
  });

  const chartData = [
    { status: "Pendente", value: counts.pending },
    { status: "Em progresso", value: counts["in-progress"] },
    { status: "Concluída", value: counts.done },
  ];

  if (isLoading) return <p>Carregando gráfico...</p>;
  if (error) return <p>Erro ao carregar gráfico de produtividade.</p>;

  return (
    <section className="bg-white p-6 rounded shadow mb-8">
      <h2 className="text-xl font-bold mb-4 text-primary">
        Gráfico de Produtividade
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar
            dataKey="value"
            fill={theme.colors.primary}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ProductivityChart;
