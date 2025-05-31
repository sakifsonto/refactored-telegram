import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ExpenseTracker from "./pages/ExpenseTracker";
import BudgetManager from "./pages/BudgetManager";
import Analytics from "./pages/Analytics";
import SavingsGoalsPage from "./pages/SavingsGoals";
import Navigation from "./components/layout/Navigation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="76twikyoa" data-path="src/App.tsx">
    <TooltipProvider data-id="gbx8fab4v" data-path="src/App.tsx">
      <Toaster data-id="8e8novgh4" data-path="src/App.tsx" />
      <BrowserRouter data-id="esgaxjjzq" data-path="src/App.tsx">
        <div className="min-h-screen bg-gray-50" data-id="20e7ozjfl" data-path="src/App.tsx">
          <Navigation data-id="q1v82wswf" data-path="src/App.tsx" />
          <Routes data-id="610gxqy1h" data-path="src/App.tsx">
            <Route path="/" element={<Dashboard data-id="u7h8uoze9" data-path="src/App.tsx" />} data-id="py80talae" data-path="src/App.tsx" />
            <Route path="/expenses" element={<ExpenseTracker data-id="cofef9xkq" data-path="src/App.tsx" />} data-id="syusarefm" data-path="src/App.tsx" />
            <Route path="/budget" element={<BudgetManager data-id="bubpecy2i" data-path="src/App.tsx" />} data-id="6bgw1lk1u" data-path="src/App.tsx" />
            <Route path="/analytics" element={<Analytics data-id="1jy7z2mz6" data-path="src/App.tsx" />} data-id="ogldr7ecj" data-path="src/App.tsx" />
            <Route path="/savings" element={<SavingsGoalsPage data-id="pdg3mzted" data-path="src/App.tsx" />} data-id="m79by23yz" data-path="src/App.tsx" />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound data-id="foh7m5qik" data-path="src/App.tsx" />} data-id="clavw4ntb" data-path="src/App.tsx" />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;