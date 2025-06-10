export const API_URL = "http://localhost:3001";

import type { Task } from "../types/Task";
import type { Suggestion } from "../types/Suggestion";
import type { SuggestTimePayload, TimeSlot } from "../types/SuggestRequest";

export async function fetchTasks(): Promise<Task[]> {
  try {
    const res = await fetch(`${API_URL}/tasks`);
    if (!res.ok) throw new Error("Erro ao buscar tarefas");
    return await res.json();
  } catch (error) {
    console.error("Erro em fetchTasks:", error);
    throw error;
  }
}

export async function getTask(id: number): Promise<Task> {
  const res = await fetch(`${API_URL}/tasks/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar tarefa");
  return await res.json();
}

export async function fetchSuggestions(): Promise<Suggestion[]> {
  try {
    const res = await fetch(`${API_URL}/suggestions`);
    if (!res.ok) throw new Error("Erro ao buscar sugestões");
    return await res.json();
  } catch (error) {
    console.error("Erro em fetchSuggestions:", error);
    throw error;
  }
}

export const postSuggestTime = async (_data: any) => {
  const now = new Date();
  return [
    {
      start: new Date(now.getTime() + 60 * 60 * 1000).toISOString(),
      end: new Date(now.getTime() + 2 * 60 * 60 * 1000).toISOString(),
      score: 0.9,
    },
    {
      start: new Date(now.getTime() + 3 * 60 * 60 * 1000).toISOString(),
      end: new Date(now.getTime() + 4 * 60 * 60 * 1000).toISOString(),
      score: 0.8,
    },
  ];
};

export async function createTask(task: Omit<Task, "id">): Promise<Task> {
  try {
    const res = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!res.ok) throw new Error("Erro ao criar tarefa");
    return await res.json();
  } catch (error) {
    console.error("Erro em createTask:", error);
    throw error;
  }
}

export async function updateTask(
  id: number,
  data: Omit<Task, "id">
): Promise<Task> {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erro ao atualizar tarefa");
  return await res.json();
}

export async function deleteTask(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Erro ao excluir tarefa");
}
