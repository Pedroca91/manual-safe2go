import { Package, Info } from "lucide-react";

export default function Produtos() {
  const screenshotUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330515528/sjGozaxnsTKMRDSD.webp";
  
  const produtos = [
    {
      nome: "Responsabilidade Civil Profissional e Material - RCPM",
      descricao: "Seguro com validade de até 5 anos após a emissão do Habite-se, obrigatório em projetos habitacionais financiados pelo Banco do Brasil e Caixa Econômica Federal.",
      detalhes: "Para unidades de até R$ 1.000.000 e limite de garantia de 20% do valor do imóvel.",
    },
    {
      nome: "Compreensivo Empresarial",
      descricao: "Para indústrias e empresas de comércio e serviço.",
      detalhes: "Limite máximo de cobertura de até 30 milhões de reais.",
    },
    {
      nome: "Fiança Locatícia",
      descricao: "Seguro que substitui outras garantias para locação de imóveis residenciais e não residenciais.",
      detalhes: "Cobre não pagamento de aluguel e encargos por parte do inquilino.",
    },
    {
      nome: "Multi Risco Eventos",
      descricao: "Produto Multi Risco de Eventos para coberturas em eventos diversos.",
      detalhes: "Proteção completa para realizadores de eventos.",
    },
    {
      nome: "RD Equipamentos",
      descricao: "Para equipamentos da linha amarela (Construção Civil).",
      detalhes: "Cobertura específica para maquinário pesado.",
    },
    {
      nome: "Instalação e Montagem de Placas Fotovoltaicas",
      descricao: "Para instalações de painéis solares em residências, comércios ou indústrias.",
      detalhes: "Valor em Risco de até 2 milhões de reais.",
    },
    {
      nome: "Riscos de Engenharia",
      descricao: "Para obras de Grupo I com Valor em Risco de até 70 milhões de reais.",
      detalhes: "Incluindo também coberturas de Responsabilidade Civil.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Produtos</h1>
        <p className="text-xl text-muted-foreground">
          Catálogo completo de seguros disponíveis na plataforma
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          A seção "Produtos" apresenta um catálogo completo de todos os seguros que podem ser 
          cotados e contratados através da plataforma Safe2Go. Cada produto é exibido em um 
          card individual, contendo uma breve descrição e as ações disponíveis.
        </p>

        <div className="my-8 p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <h3 className="text-lg font-bold mb-4">Visualização da Página de Produtos</h3>
          <img 
            src={screenshotUrl} 
            alt="Screenshot da página de Produtos do Safe2Go" 
            className="w-full rounded-lg border-2 border-border"
          />
        </div>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <h2 className="text-3xl font-bold mb-6">Visualizando os Produtos</h2>
          
          <p className="text-lg mb-4 text-muted-foreground">
            Ao acessar o painel principal, a lista de produtos é a primeira informação exibida. 
            Para cada produto, o usuário encontrará:
          </p>

          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Título do Produto:</strong> O nome do seguro</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Descrição:</strong> Um resumo sobre a finalidade e cobertura do seguro</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong>Ações:</strong> Botões para "Fazer Cotação" ou "Saiba Mais"</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-secondary/20 border-2 border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-secondary-foreground" />
            <h3 className="text-2xl font-bold">Ação "Saiba Mais"</h3>
          </div>
          
          <p className="text-muted-foreground">
            Para obter informações mais detalhadas sobre um produto específico, o usuário pode 
            clicar no botão "Saiba Mais". Uma janela modal será exibida, contendo informações como 
            objetivo do seguro, coberturas oferecidas e público-alvo.
          </p>
        </div>

        <h2 className="text-3xl font-bold pt-4">Produtos Disponíveis</h2>

        <div className="grid gap-4">
          {produtos.map((produto, index) => (
            <div 
              key={index}
              className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow-hover"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{produto.nome}</h3>
                  <p className="text-muted-foreground mb-2">{produto.descricao}</p>
                  <p className="text-sm text-muted-foreground italic">{produto.detalhes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
