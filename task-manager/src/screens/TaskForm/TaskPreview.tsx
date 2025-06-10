import { format } from "date-fns";

type Props = {
  formData: any;
};

const TaskPreview = ({ formData }: Props) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded shadow">
      <h3 className="font-semibold text-lg mb-2">Pré-visualização:</h3>
      <p>
        <strong>Título:</strong> {formData.title}
      </p>
      <p>
        <strong>Descrição:</strong> {formData.description}
      </p>
      <p>
        <strong>Categoria:</strong> {formData.category}
      </p>
      <p>
        <strong>Prioridade:</strong> {formData.priority}
      </p>
      <p>
        <strong>Duração:</strong> {formData.estimated_duration} min
      </p>
      <p>
        <strong>Prazo:</strong>{" "}
        {formData.deadline &&
          format(new Date(formData.deadline), "dd/MM/yyyy HH:mm")}
      </p>
      <p>
        <strong>Lembretes:</strong> {formData.reminders ? "Sim" : "Não"}
      </p>
    </div>
  );
};

export default TaskPreview;
