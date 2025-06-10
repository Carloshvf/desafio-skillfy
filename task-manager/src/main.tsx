import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserPreferencesProvider } from "./contexts/UserPreferencesContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserPreferencesProvider>
        <App />
      </UserPreferencesProvider>
    </QueryClientProvider>
  </StrictMode>
);
