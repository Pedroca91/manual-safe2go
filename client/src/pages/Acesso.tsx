import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function Acesso() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Acesso ao Sistema</h1>
        <p className="text-xl text-muted-foreground">
          Como fazer login e acessar a plataforma Safe2Go
        </p>
      </div>

      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Para acessar o sistema Safe2Go, o usuário deve utilizar um navegador de internet 
          e seguir os passos abaixo. A tela de login é a porta de entrada para todas as 
          funcionalidades da plataforma.
        </p>

        <div className="space-y-4">
          <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
            <h3 className="text-2xl font-bold mb-4">Passo a Passo</h3>
            
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h4 className="font-bold mb-1">Acesse a URL</h4>
                  <p className="text-muted-foreground">
                    Abra seu navegador e digite o endereço:{" "}
                    <code className="px-2 py-1 bg-muted rounded font-mono text-sm">
                      https://demo.safe2go.net.br/
                    </code>
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h4 className="font-bold mb-1">Informe suas credenciais</h4>
                  <p className="text-muted-foreground">
                    Preencha os campos "E-mail" e "Senha" com os dados fornecidos.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h4 className="font-bold mb-1">Clique em "Entrar"</h4>
                  <p className="text-muted-foreground">
                    Após preencher os campos, clique no botão "Entrar" para acessar o painel principal do sistema.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-2 border-border">
              <thead>
                <tr className="bg-muted border-b-2 border-border">
                  <th className="p-4 text-left font-bold">Campo</th>
                  <th className="p-4 text-left font-bold">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-border">
                  <td className="p-4 font-mono font-bold">E-mail</td>
                  <td className="p-4 text-muted-foreground">Endereço de e-mail cadastrado no sistema.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-bold">Senha</td>
                  <td className="p-4 text-muted-foreground">Senha de acesso pessoal e intransferível.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Alert className="border-2 border-border brutal-shadow">
            <Info className="h-5 w-5" />
            <AlertDescription className="ml-2">
              <strong>Esqueceu a senha?</strong> Caso tenha esquecido sua senha, clique no link 
              "Esqueceu a senha?" localizado abaixo do botão "Entrar" e siga as instruções para redefini-la.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
