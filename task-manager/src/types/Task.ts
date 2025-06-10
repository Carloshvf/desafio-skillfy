export type Priority = "high" | "medium" | "low";

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  category: string;
  estimated_duration: number;
  deadline: string;
  status: string;
}
