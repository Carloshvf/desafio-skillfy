import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../services/api";
import type { Task } from "../types/Task";

export function useTasks() {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
}
