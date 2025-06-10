import { render, screen } from "@testing-library/react";
import TaskForm from "../src/screens/TaskForm";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserPreferencesProvider } from "../src/contexts/UserPreferencesContext";

const queryClient = new QueryClient();

test("renderiza o formulário de nova tarefa", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <UserPreferencesProvider>
        <MemoryRouter>
          <TaskForm />
        </MemoryRouter>
      </UserPreferencesProvider>
    </QueryClientProvider>
  );

  await expect(
    screen.findByPlaceholderText(/Título/i)
  ).resolves.toBeInTheDocument();
  await expect(
    screen.findByPlaceholderText(/Descrição/i)
  ).resolves.toBeInTheDocument();

  await expect(
    screen.findByRole("button", { name: /Salvar/i })
  ).resolves.toBeInTheDocument();
});
