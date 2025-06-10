import { format } from "date-fns";

type Props = {
  suggestions: {
    start: string;
    end: string;
    score: number;
  }[];
  onSuggest: () => void;
};

const TimeSuggestions = ({ suggestions, onSuggest }: Props) => {
  return (
    <div className="space-y-4">
      <button
        onClick={onSuggest}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Sugerir horário
      </button>

      {suggestions.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Sugestões:</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {suggestions.map((s, i) => (
              <li key={i}>
                {format(new Date(s.start), "HH:mm")} -{" "}
                {format(new Date(s.end), "HH:mm")} (Score:{" "}
                {(s.score * 100).toFixed(0)}%)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TimeSuggestions;
