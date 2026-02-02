import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { 
  BookOpen, 
  LogIn, 
  LayoutDashboard, 
  Package, 
  FileText, 
  Shield, 
  User,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

interface ManualLayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/", label: "Introdução", icon: BookOpen },
  { href: "/acesso", label: "Acesso ao Sistema", icon: LogIn },
  { href: "/dashboard", label: "Painel Principal", icon: LayoutDashboard },
  { href: "/produtos", label: "Produtos", icon: Package },
  { href: "/cotacoes", label: "Cotações", icon: FileText },
  { href: "/apolices", label: "Apólices", icon: Shield },
  { href: "/conta", label: "Dados da Conta", icon: User },
];

export default function ManualLayout({ children }: ManualLayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:block lg:w-80 bg-card border-r-[3px] border-border p-6 sticky top-0 h-screen overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Safe2Go</h1>
          <p className="text-sm text-muted-foreground font-medium">Manual do Usuário</p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <a
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-border
                    transition-all duration-150
                    ${isActive 
                      ? 'bg-primary text-primary-foreground brutal-shadow-sm' 
                      : 'bg-card hover:bg-muted brutal-shadow-hover'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </a>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 p-4 bg-secondary/20 border-2 border-border rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong className="text-foreground">Versão:</strong> 1.0.0<br />
            <strong className="text-foreground">Atualizado:</strong> Fevereiro 2026
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-card border-b-[3px] border-border p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">Safe2Go</h1>
            <p className="text-xs text-muted-foreground font-medium">Manual do Usuário</p>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-border rounded-lg bg-card brutal-shadow-sm hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 space-y-2 pb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              
              return (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-border
                      transition-all duration-150
                      ${isActive 
                        ? 'bg-primary text-primary-foreground brutal-shadow-sm' 
                        : 'bg-card hover:bg-muted'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 max-w-5xl">
        {children}
      </main>
    </div>
  );
}
