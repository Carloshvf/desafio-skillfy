import { render, screen } from "@testing-library/react";
import TaskList from "../src/screens/TaskList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient();

test("renderiza título da tela de tarefas", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <TaskList />
      </MemoryRouter>
    </QueryClientProvider>
  );

  await expect(
    screen.findByText(/Lista de Tarefas/i)
  ).resolves.toBeInTheDocument();
});
