import { User, Lock, Save } from "lucide-react";

export default function Conta() {
  const dadosConta = [
    { campo: "Razão Social", desc: "Nome da empresa" },
    { campo: "CNPJ", desc: "Cadastro Nacional de Pessoa Jurídica" },
    { campo: "Tipo", desc: "Perfil do usuário (Administrador, Usuário, etc.)" },
    { campo: "Nome", desc: "Nome completo do usuário" },
    { campo: "Nome Social", desc: "Nome social (opcional)" },
    { campo: "E-mail", desc: "Endereço de e-mail para login" },
    { campo: "Telefone", desc: "Número de telefone/celular" },
    { campo: "CPF", desc: "Cadastro de Pessoa Física" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Dados da Conta</h1>
        <p className="text-xl text-muted-foreground">
          Gerenciar suas informações pessoais e de acesso
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          A seção "Dados da Conta" é onde o usuário pode gerenciar suas informações pessoais e 
          de acesso ao sistema. Para acessá-la, clique em "DADOS DA CONTA" no menu lateral.
        </p>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Gerenciando suas Informações</h2>
          </div>
          
          <p className="text-lg mb-6 text-muted-foreground">
            Nesta tela, o usuário pode visualizar e editar os seguintes dados:
          </p>

          <div className="space-y-3">
            {dadosConta.map((dado, index) => (
              <div key={index} className="p-4 bg-muted border-2 border-border rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-bold">{dado.campo}</h4>
                  <p className="text-sm text-muted-foreground">{dado.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-secondary/20 border-2 border-border rounded-lg flex items-center gap-3">
            <Save className="w-5 h-5 text-secondary-foreground" />
            <p className="text-muted-foreground">
              Para salvar qualquer modificação nos dados cadastrais, basta clicar no botão 
              <strong className="text-foreground"> "Salvar Alterações"</strong>.
            </p>
          </div>
        </div>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Alterando a Senha</h2>
          </div>
          
          <p className="text-lg mb-6 text-muted-foreground">
            Para alterar a senha, o usuário deve seguir estes passos:
          </p>

          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <h4 className="font-bold mb-1">Informe a Senha Anterior</h4>
                <p className="text-muted-foreground">
                  No campo "Senha Anterior", digite a sua senha atual.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <h4 className="font-bold mb-1">Digite a Nova Senha</h4>
                <p className="text-muted-foreground">
                  Crie uma nova senha segura nos campos "Informe a nova senha" e "Repita a nova senha".
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <h4 className="font-bold mb-1">Clique em "Alterar minha Senha"</h4>
                <p className="text-muted-foreground">
                  O sistema confirmará a alteração e a nova senha já estará válida para o próximo acesso.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="p-6 bg-muted border-2 border-border rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Conclusão</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Este manual apresentou as principais funcionalidades do sistema Safe2Go, com o objetivo 
            de capacitar os usuários finais a utilizarem a plataforma de forma autônoma e eficiente. 
            Com este guia, esperamos que você possa realizar suas cotações, gerenciar suas apólices 
            e manter seus dados sempre atualizados com facilidade.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            Em caso de dúvidas não abordadas neste manual, entre em contato com o suporte técnico.
          </p>
        </div>
      </div>
    </div>
  );
}
