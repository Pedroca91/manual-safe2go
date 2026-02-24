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
  X,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";

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
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">Safe2Go</h1>
          <p className="text-sm text-muted-foreground font-medium mb-4">Manual do Usuário</p>
          <SearchBar />
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-border
                  transition-all duration-150 block
                  ${isActive 
                    ? 'bg-primary text-primary-foreground brutal-shadow-sm' 
                    : 'bg-card hover:bg-muted brutal-shadow-hover'
                  }
                `}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
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
        <div className="flex items-center justify-between mb-4">
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
        <SearchBar />

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 space-y-2 pb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-border
                    transition-all duration-150 block
                    ${isActive 
                      ? 'bg-primary text-primary-foreground brutal-shadow-sm' 
                      : 'bg-card hover:bg-muted'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
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

      {/* WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-40 group">
        {/* Balao de Mensagem */}
        <div className="absolute bottom-20 right-0 mb-2 bg-white border-2 border-border rounded-lg p-4 shadow-lg max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
          <p className="text-sm text-foreground font-medium">Se nao conseguiu achar a sua duvida, entra em contato com o nosso suporte pelo whatsapp</p>
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-2 border-border border-t-0 border-l-0 transform rotate-45"></div>
        </div>
        
        {/* Botao WhatsApp */}
        <a
          href="https://wa.me/5511991762878"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full border-2 border-green-700 shadow-lg transition-all duration-200 hover:scale-110 brutal-shadow-sm"
          title="Fale conosco no WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
