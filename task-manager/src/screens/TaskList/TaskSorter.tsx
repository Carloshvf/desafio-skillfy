type Props = {
  sortBy: string;
  onChange: (value: string) => void;
};

const TaskSorter = ({ sortBy, onChange }: Props) => {
  return (
    <div className="mb-4">
      <label className="mr-2 text-sm font-medium text-gray-700">
        Ordenar por:
      </label>
      <select
        value={sortBy}
        onChange={(e) => onChange(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="">Nenhum</option>
        <option value="deadline">Data</option>
        <option value="priority">Prioridade</option>
        <option value="title">Nome</option>
      </select>
    </div>
  );
};

export default TaskSorter;
