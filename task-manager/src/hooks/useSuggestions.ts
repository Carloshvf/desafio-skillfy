import { useQuery } from "@tanstack/react-query";
import { fetchSuggestions } from "../services/api";
import type { Suggestion } from "../types/Suggestion";

export function useSuggestions() {
  return useQuery<Suggestion[]>({
    queryKey: ["suggestions"],
    queryFn: fetchSuggestions,
  });
}
