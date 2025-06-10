import { render, screen } from "@testing-library/react";
import TaskCard from "../src/components/TaskCard";
import type { Task } from "../src/types/Task";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient();

const task: Task = {
  id: 1,
  title: "Testar componente",
  description: "Descrição de teste",
  category: "work",
  priority: "high",
  estimated_duration: 30,
  deadline: new Date().toISOString(),
  status: "pending",
};

test("renderiza título e status da tarefa", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <TaskCard task={task} />
      </MemoryRouter>
    </QueryClientProvider>
  );

  expect(screen.getByText("Testar componente")).toBeInTheDocument();
  expect(screen.getByText(/Status:/)).toBeInTheDocument();
});
