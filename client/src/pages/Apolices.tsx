import { Shield, FileText, AlertCircle, Edit, Copy, XCircle } from "lucide-react";

export default function Apolices() {
  const apolicesScreenshot = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330515528/eOmKTaJdmqZTmvEe.webp";
  const colunas = [
    { nome: "Nº DOCUMENTO", desc: "Número de identificação da apólice ou certificado." },
    { nome: "SEGURADO", desc: "Nome da pessoa ou empresa segurada." },
    { nome: "PRODUTO", desc: "Tipo de seguro contratado." },
    { nome: "LIMITE MÁXIMO GARANTIA", desc: "Valor máximo de cobertura da apólice." },
    { nome: "DATA DE EMISSÃO", desc: "Data em que a apólice foi emitida." },
    { nome: "PRÊMIO LÍQUIDO / COMISSÃO", desc: "Valor do prêmio e a comissão do corretor." },
    { nome: "SITUAÇÃO", desc: "Status atual da apólice (ex: \"Vigente\", \"Proposta aguardando pagamento\")." },
  ];

  const acoes = [
    { nome: "Documentos", icon: FileText, desc: "Permite visualizar e fazer o download dos documentos relacionados à apólice." },
    { nome: "Aviso de Sinistro", icon: AlertCircle, desc: "Inicia o processo de comunicação de um sinistro para a seguradora." },
    { nome: "Novo Endosso", icon: Edit, desc: "Permite solicitar alterações em uma apólice vigente." },
    { nome: "Clonar", icon: Copy, desc: "Cria uma nova cotação com base nos dados de uma apólice existente." },
    { nome: "Cancelar Proposta", icon: XCircle, desc: "Solicita o cancelamento de uma proposta que ainda não foi paga." },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Apólices e Certificados</h1>
        <p className="text-xl text-muted-foreground">
          Visualizar e gerenciar todas as apólices emitidas
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Esta seção permite ao usuário visualizar e gerenciar todas as apólices de seguro e 
          certificados que foram emitidos. Para acessá-la, clique em "APÓLICES E CERTIFICADOS" 
          no menu lateral.
        </p>

        <div className="my-8 p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <h3 className="text-lg font-bold mb-4">Visualização da Página de Apólices</h3>
          <img 
            src={apolicesScreenshot} 
            alt="Screenshot da página de Apólices do Safe2Go" 
            className="w-full rounded-lg border-2 border-border"
          />
        </div>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <h2 className="text-3xl font-bold mb-6">Tela Principal de Apólices</h2>
          
          <p className="text-lg mb-6 text-muted-foreground">
            A tela exibe uma lista de todos os documentos emitidos, com as seguintes informações:
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

        <div className="p-6 bg-secondary/20 border-2 border-border rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Ações Disponíveis em uma Apólice</h3>
          
          <p className="text-lg mb-6 text-muted-foreground">
            Dependendo do status da apólice, o usuário pode realizar as seguintes ações:
          </p>

          <div className="grid gap-4">
            {acoes.map((acao, index) => {
              const Icon = acao.icon;
              return (
                <div key={index} className="p-4 bg-card border-2 border-border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{acao.nome}</h4>
                      <p className="text-sm text-muted-foreground">{acao.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Status das Apólices</h3>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-muted border-l-4 border-secondary rounded">
              <strong>Proposta aguardando pagamento:</strong> Aguardando confirmação de pagamento
            </div>
            <div className="p-3 bg-muted border-l-4 border-primary rounded">
              <strong>Vigente:</strong> Apólice ativa e em vigor
            </div>
            <div className="p-3 bg-muted border-l-4 border-destructive rounded">
              <strong>Vencida:</strong> Apólice com vigência expirada
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
