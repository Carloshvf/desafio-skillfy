import { useSuggestions } from "../../hooks/useSuggestions";
import { format } from "date-fns";

const TimeSuggestions = () => {
  const { data: suggestions, isLoading, error } = useSuggestions();

  if (isLoading) return <p>Carregando sugestões de horário...</p>;
  if (error) return <p>Erro ao carregar sugestões.</p>;

  return (
    <section className="mb-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-primary">
        Sugestões de Horário
      </h2>

      {(suggestions || []).length === 0 ? (
        <p className="text-gray-500">Nenhuma sugestão disponível.</p>
      ) : (
        suggestions!.map((s) => (
          <div key={s.task_id} className="mb-4">
            <h3 className="font-semibold mb-1">Tarefa #{s.task_id}</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {s.suggested_times.map((slot, index) => (
                <li key={index}>
                  {format(new Date(slot.start), "HH:mm")} -{" "}
                  {format(new Date(slot.end), "HH:mm")} ( Score:{" "}
                  {(slot.score * 100).toFixed(0)}%)
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </section>
  );
};

export default TimeSuggestions;
