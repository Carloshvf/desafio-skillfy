type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

const TaskFields = ({ formData, setFormData }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev: any) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev: any) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Título"
        className="w-full border p-2 rounded"
        value={formData.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Descrição"
        className="w-full border p-2 rounded"
        value={formData.description}
        onChange={handleChange}
      />

      <div className="flex gap-4">
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="work">Trabalho</option>
          <option value="personal">Pessoal</option>
        </select>

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="high">Alta</option>
          <option value="medium">Média</option>
          <option value="low">Baixa</option>
        </select>
      </div>

      <div className="flex gap-4">
        <input
          type="number"
          name="estimated_duration"
          className="w-full border p-2 rounded"
          placeholder="Duração estimada (min)"
          value={formData.estimated_duration}
          onChange={handleChange}
        />

        <input
          type="datetime-local"
          name="deadline"
          className="w-full border p-2 rounded"
          value={formData.deadline}
          onChange={handleChange}
        />
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="reminders"
          checked={formData.reminders}
          onChange={handleChange}
        />
        Ativar lembretes
      </label>
    </div>
  );
};

export default TaskFields;
