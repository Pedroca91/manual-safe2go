import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground border-2 border-border rounded-lg brutal-shadow-sm">
          <span className="font-medium">📚 Guia Completo do Usuário</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
          Manual do Sistema{" "}
          <span className="text-primary">Safe2Go</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Este manual foi elaborado para guiar os usuários finais na utilização do sistema Safe2Go, 
          uma plataforma completa para cotação e gerenciamento de seguros.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/acesso">
            <Button 
              size="lg" 
              className="border-2 border-border brutal-shadow hover:brutal-shadow-sm transition-all"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Rápido e Fácil</h3>
          <p className="text-muted-foreground">
            Instruções passo a passo para realizar suas tarefas com eficiência.
          </p>
        </div>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Completo</h3>
          <p className="text-muted-foreground">
            Todas as funcionalidades principais do sistema documentadas.
          </p>
        </div>

        <div className="p-6 bg-card border-2 border-border rounded-lg brutal-shadow">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Confiável</h3>
          <p className="text-muted-foreground">
            Informações atualizadas e validadas pela equipe Safe2Go.
          </p>
        </div>
      </div>

      {/* Introduction Content */}
      <div className="space-y-6 pt-8">
        <h2 className="text-3xl font-bold">Introdução</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            O objetivo deste documento é fornecer um guia passo a passo, claro e objetivo, 
            sobre as principais funcionalidades do sistema, permitindo que os usuários realizem 
            suas tarefas diárias com mais eficiência e autonomia.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            A seguir, apresentamos as seções que compõem este manual, abrangendo desde o 
            primeiro acesso até as operações mais recorrentes, como a criação de cotações 
            e a consulta de apólices.
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="p-8 bg-muted border-2 border-border rounded-lg brutal-shadow">
        <h3 className="text-2xl font-bold mb-6">Navegação Rápida</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/acesso">
            <a className="block p-4 bg-card border-2 border-border rounded-lg hover:bg-muted transition-colors">
              <h4 className="font-bold mb-1">1. Acesso ao Sistema</h4>
              <p className="text-sm text-muted-foreground">Como fazer login e acessar a plataforma</p>
            </a>
          </Link>

          <Link href="/dashboard">
            <a className="block p-4 bg-card border-2 border-border rounded-lg hover:bg-muted transition-colors">
              <h4 className="font-bold mb-1">2. Painel Principal</h4>
              <p className="text-sm text-muted-foreground">Visão geral do dashboard e navegação</p>
            </a>
          </Link>

          <Link href="/produtos">
            <a className="block p-4 bg-card border-2 border-border rounded-lg hover:bg-muted transition-colors">
              <h4 className="font-bold mb-1">3. Produtos</h4>
              <p className="text-sm text-muted-foreground">Catálogo de seguros disponíveis</p>
            </a>
          </Link>

          <Link href="/cotacoes">
            <a className="block p-4 bg-card border-2 border-border rounded-lg hover:bg-muted transition-colors">
              <h4 className="font-bold mb-1">4. Cotações</h4>
              <p className="text-sm text-muted-foreground">Criar e gerenciar cotações</p>
            </a>
          </Link>

          <Link href="/apolices">
            <a className="block p-4 bg-card border-2 border-border rounded-lg hover:bg-muted transition-colors">
              <h4 className="font-bold mb-1">5. Apólices e Certificados</h4>
              <p className="text-sm text-muted-foreground">Consultar e gerenciar apólices</p>
            </a>
          </Link>

          <Link href="/conta">
            <a className="block p-4 bg-card border-2 border-border rounded-lg hover:bg-muted transition-colors">
              <h4 className="font-bold mb-1">6. Dados da Conta</h4>
              <p className="text-sm text-muted-foreground">Gerenciar informações pessoais</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
