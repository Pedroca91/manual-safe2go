import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Link } from "wouter";

interface SearchResult {
  id: string;
  title: string;
  content: string;
  path: string;
}

const searchData: SearchResult[] = [
  {
    id: "acesso-1",
    title: "Acesso ao Sistema",
    content: "Como fazer login, preencher e-mail e senha, recuperar senha",
    path: "/acesso",
  },
  {
    id: "dashboard-1",
    title: "Painel Principal",
    content: "Menu de navegação, PRODUTOS, COTAÇÕES, APÓLICES, DADOS DA CONTA",
    path: "/dashboard",
  },
  {
    id: "produtos-1",
    title: "Produtos Disponíveis",
    content: "Responsabilidade Civil, Compreensivo Empresarial, Fiança Locatícia, Multi Risco Eventos, RD Equipamentos, Placas Fotovoltaicas, Riscos de Engenharia",
    path: "/produtos",
  },
  {
    id: "cotacoes-1",
    title: "Criar Cotação",
    content: "Nova cotação, preencher formulário, enviar para análise, acompanhar status",
    path: "/cotacoes",
  },
  {
    id: "cotacoes-2",
    title: "Ações em Cotações",
    content: "Editar questionário, excluir, visualizar, solicitar revalidação",
    path: "/cotacoes",
  },
  {
    id: "apolices-1",
    title: "Apólices e Certificados",
    content: "Visualizar apólices, documentos, aviso de sinistro, novo endosso, clonar, cancelar proposta",
    path: "/apolices",
  },
  {
    id: "apolices-2",
    title: "Status de Apólices",
    content: "Proposta aguardando pagamento, vigente, vencida",
    path: "/apolices",
  },
  {
    id: "conta-1",
    title: "Dados da Conta",
    content: "Gerenciar informações pessoais, razão social, CNPJ, nome, e-mail, telefone, CPF",
    path: "/conta",
  },
  {
    id: "conta-2",
    title: "Alterar Senha",
    content: "Mudar senha, senha anterior, nova senha",
    path: "/conta",
  },
];

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const term = searchTerm.toLowerCase();
    return searchData.filter((item) =>
      item.title.toLowerCase().includes(term) ||
      item.content.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Buscar no manual..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 border-2 border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Limpar busca"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && (searchTerm || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto brutal-shadow">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result) => (
                <Link key={result.id} href={result.path}>
                  <a
                    onClick={() => {
                      setSearchTerm("");
                      setIsOpen(false);
                    }}
                    className="block p-3 hover:bg-muted rounded-lg transition-colors border-b border-border last:border-b-0"
                  >
                    <h4 className="font-bold text-foreground">{result.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {result.content}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              Nenhum resultado encontrado para "{searchTerm}"
            </div>
          )}
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
