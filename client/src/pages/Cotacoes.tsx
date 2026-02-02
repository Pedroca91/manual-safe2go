import { FileText, Edit, Trash2, Eye, RefreshCw } from "lucide-react";

export default function Cotacoes() {
  const colunas = [
    { nome: "Nº COTAÇÃO", desc: "Número de identificação único da cotação." },
    { nome: "SEGURADO", desc: "Nome da pessoa ou empresa segurada." },
    { nome: "PRODUTO", desc: "Tipo de seguro que está sendo cotado." },
    { nome: "LIMITE MÁXIMO GARANTIA", desc: "Valor máximo de cobertura da cotação." },
    { nome: "DATA ÚLTIMA EDIÇÃO", desc: "Data da última alteração realizada na cotação." },
    { nome: "PRÊMIO LÍQUIDO / COMISSÃO", desc: "Valor do prêmio e a comissão do corretor." },
    { nome: "SITUAÇÃO", desc: "Status atual da cotação (ex: \"Calculada\", \"Em moderação\")." },
  ];

  const acoes = [
    { nome: "Editar Questionário", icon: Edit, desc: "Permite alterar as informações de uma cotação que ainda está em preenchimento." },
    { nome: "Excluir", icon: Trash2, desc: "Remove uma cotação do sistema." },
    { nome: "Visualizar", icon: Eye, desc: "Exibe os detalhes de uma cotação já calculada." },
    { nome: "Solicitar Revalidação", icon: RefreshCw, desc: "Pede uma nova análise de uma cotação que já foi calculada." },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Cotações</h1>
        <p className="text-xl text-muted-foreground">
          Criar, gerenciar e acompanhar suas cotações de seguro
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          A seção de "Cotações" é uma das mais importantes do sistema, pois permite ao usuário 
          criar, gerenciar e acompanhar o status de todas as suas cotações de seguro. Para 
          acessá-la, clique em "COTAÇÕES" no menu lateral.
        </p>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <h2 className="text-3xl font-bold mb-6">Tela Principal de Cotações</h2>
          
          <p className="text-lg mb-6 text-muted-foreground">
            A tela principal exibe uma lista de todas as cotações já realizadas, com as seguintes 
            informações e funcionalidades:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-2 border-border">
              <thead>
                <tr className="bg-muted border-b-2 border-border">
                  <th className="p-4 text-left font-bold">Coluna</th>
                  <th className="p-4 text-left font-bold">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {colunas.map((coluna, index) => (
                  <tr key={index} className={index < colunas.length - 1 ? "border-b-2 border-border" : ""}>
                    <td className="p-4 font-mono font-bold">{coluna.nome}</td>
                    <td className="p-4 text-muted-foreground">{coluna.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <h2 className="text-3xl font-bold mb-6">Criando uma Nova Cotação</h2>
          
          <p className="text-lg mb-6 text-muted-foreground">
            Para iniciar uma nova cotação, o usuário deve seguir os seguintes passos:
          </p>

          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <h4 className="font-bold mb-1">Acesse a seção "Produtos"</h4>
                <p className="text-muted-foreground">
                  No painel principal, escolha o produto desejado.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <h4 className="font-bold mb-1">Clique em "Fazer Cotação"</h4>
                <p className="text-muted-foreground">
                  No card do produto escolhido, clique no botão "Fazer Cotação".
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <h4 className="font-bold mb-1">Preencha o formulário</h4>
                <p className="text-muted-foreground">
                  O sistema irá apresentar um formulário com várias etapas, onde o usuário deverá 
                  informar os dados do segurado, do objeto a ser segurado e outras informações relevantes.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                4
              </span>
              <div>
                <h4 className="font-bold mb-1">Envie para análise</h4>
                <p className="text-muted-foreground">
                  Após o preenchimento de todas as informações, a cotação será enviada para análise 
                  e o usuário poderá acompanhar o status na seção "COTAÇÕES".
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="p-6 bg-secondary/20 border-2 border-border rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Ações Disponíveis em uma Cotação</h3>
          
          <p className="text-lg mb-6 text-muted-foreground">
            Para cada cotação listada, o usuário pode realizar diversas ações, dependendo do status 
            em que ela se encontra:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {acoes.map((acao, index) => {
              const Icon = acao.icon;
              return (
                <div key={index} className="p-4 bg-card border-2 border-border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h4 className="font-bold">{acao.nome}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{acao.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
