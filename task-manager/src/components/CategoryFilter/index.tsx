type Filters = {
  priority: string;
  category: string;
  status: string;
};

type Props = {
  filters: Filters;
  onChange: (field: keyof Filters, value: string) => void;
};

const TaskFilters = ({ filters, onChange }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <select
        className="border px-3 py-2 rounded"
        value={filters.category}
        onChange={(e) => onChange("category", e.target.value)}
      >
        <option value="">Todas categorias</option>
        <option value="work">Trabalho</option>
        <option value="personal">Pessoal</option>
      </select>

      <select
        className="border px-3 py-2 rounded"
        value={filters.priority}
        onChange={(e) => onChange("priority", e.target.value)}
      >
        <option value="">Todas prioridades</option>
        <option value="high">Alta</option>
        <option value="medium">Média</option>
        <option value="low">Baixa</option>
      </select>

      <select
        className="border px-3 py-2 rounded"
        value={filters.status}
        onChange={(e) => onChange("status", e.target.value)}
      >
        <option value="">Todos status</option>
        <option value="pending">Pendente</option>
        <option value="in-progress">Em progresso</option>
        <option value="done">Concluída</option>
      </select>
    </div>
  );
};

export default TaskFilters;
