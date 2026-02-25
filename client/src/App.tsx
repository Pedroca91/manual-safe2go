import { useEffect } from "react";
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
  useEffect(() => {
    // Remove "Made with Manus" badge
    const removeManusBadge = () => {
      // Remove by text content
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        if (el.textContent?.includes('Made with Manus') || el.textContent?.includes('Feito com Manus')) {
          (el as HTMLElement).style.display = 'none';
          (el as HTMLElement).style.visibility = 'hidden';
          (el as HTMLElement).style.pointerEvents = 'none';
        }
      });
      
      // Remove by common badge selectors
      const selectors = [
        '[class*="manus-badge"]',
        '[class*="made-with"]',
        '[data-testid*="manus"]',
        'div[role="tooltip"]',
      ];
      
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.remove();
        });
      });
    };
    
    // Run immediately
    removeManusBadge();
    
    // Run again after a delay to catch dynamically injected elements
    const timeout = setTimeout(removeManusBadge, 500);
    const timeout2 = setTimeout(removeManusBadge, 1000);
    
    // Watch for DOM changes
    const observer = new MutationObserver(removeManusBadge);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      observer.disconnect();
    };
  }, []);

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
