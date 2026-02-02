import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ManualLayout from "./components/ManualLayout";
import Home from "./pages/Home";
import Acesso from "./pages/Acesso";
import Dashboard from "./pages/Dashboard";
import Produtos from "./pages/Produtos";
import Cotacoes from "./pages/Cotacoes";
import Apolices from "./pages/Apolices";
import Conta from "./pages/Conta";

function Router() {
  return (
    <Switch>
      <Route path={"/"}>
        <ManualLayout>
          <Home />
        </ManualLayout>
      </Route>
      <Route path={"/acesso"}>
        <ManualLayout>
          <Acesso />
        </ManualLayout>
      </Route>
      <Route path={"/dashboard"}>
        <ManualLayout>
          <Dashboard />
        </ManualLayout>
      </Route>
      <Route path={"/produtos"}>
        <ManualLayout>
          <Produtos />
        </ManualLayout>
      </Route>
      <Route path={"/cotacoes"}>
        <ManualLayout>
          <Cotacoes />
        </ManualLayout>
      </Route>
      <Route path={"/apolices"}>
        <ManualLayout>
          <Apolices />
        </ManualLayout>
      </Route>
      <Route path={"/conta"}>
        <ManualLayout>
          <Conta />
        </ManualLayout>
      </Route>
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
