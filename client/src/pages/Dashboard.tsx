export default function Dashboard() {
  const menuItems = [
    {
      name: "PRODUTOS",
      description: "Exibe o catálogo de seguros disponíveis para cotação.",
    },
    {
      name: "COTAÇÕES",
      description: "Permite gerenciar todas as cotações, desde a criação até a aprovação.",
    },
    {
      name: "APÓLICES E CERTIFICADOS",
      description: "Centraliza a consulta e o gerenciamento de apólices e certificados emitidos.",
    },
    {
      name: "DADOS DA CONTA",
      description: "Permite ao usuário visualizar e editar suas informações cadastrais e alterar a senha.",
    },
    {
      name: "SAIR",
      description: "Encerra a sessão do usuário no sistema de forma segura.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Painel Principal</h1>
        <p className="text-xl text-muted-foreground">
          Visão geral do dashboard e navegação do sistema
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Após o login, o usuário é direcionado ao Painel Principal, que oferece uma visão 
          geral dos produtos de seguro disponíveis e acesso rápido às principais seções do 
          sistema através do menu lateral.
        </p>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <h2 className="text-3xl font-bold mb-6">Menu de Navegação</h2>
          
          <p className="text-lg mb-6 text-muted-foreground">
            O menu lateral, localizado à esquerda da tela, é a principal ferramenta de navegação 
            do sistema. Ele oferece acesso rápido a todas as funcionalidades essenciais da plataforma.
          </p>

          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="p-4 bg-muted border-2 border-border rounded-lg"
              >
                <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-2 border-border">
            <thead>
              <tr className="bg-muted border-b-2 border-border">
                <th className="p-4 text-left font-bold">Item do Menu</th>
                <th className="p-4 text-left font-bold">Funcionalidade</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item, index) => (
                <tr key={index} className={index < menuItems.length - 1 ? "border-b-2 border-border" : ""}>
                  <td className="p-4 font-mono font-bold">{item.name}</td>
                  <td className="p-4 text-muted-foreground">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
