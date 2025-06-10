import { render, screen } from "@testing-library/react";
import Dashboard from "../src/screens/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient();

test("renderiza o dashboard com título", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </QueryClientProvider>
  );

  screen.debug();

  await screen.findByText(/Resumo/i);

  await expect(
    screen.findByText("Tarefas Prioritárias")
  ).resolves.toBeInTheDocument();
  await expect(
    screen.findByText("Gráfico de Produtividade")
  ).resolves.toBeInTheDocument();
});
