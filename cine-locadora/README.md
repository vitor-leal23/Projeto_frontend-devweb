# 🎬 CineLocadora

Aplicação web de locação de filmes online, desenvolvida como projeto acadêmico para a disciplina de Desenvolvimento Front-End.

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Iniciar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🏗️ Justificativa da Arquitetura

O projeto foi estruturado seguindo o princípio de **separação de responsabilidades**, dividindo o código em camadas bem definidas:

### Estrutura de Pastas

```
src/
├── components/       # Componentes visuais reutilizáveis
│   ├── Navbar.tsx    # Barra de navegação superior
│   ├── Dashboard.tsx # Contadores dinâmicos de estado
│   ├── CardFilme.tsx # Card individual de cada filme
│   ├── Sidebar.tsx   # Barra lateral com filtros por gênero
│   └── Footer.tsx    # Rodapé com identificação do aluno
├── interfaces/       # Contratos de tipagem TypeScript
│   └── IFilme.ts     # Interfaces IFilme, ICardFilmeProps, etc.
├── data/             # Dados estáticos da aplicação
│   └── filmes.ts     # Catálogo inicial de filmes
├── App.tsx           # Componente raiz — gerencia todo o estado
├── App.css           # Estilização global com tema cinema
└── main.tsx          # Ponto de entrada da aplicação
```

### Por que os componentes foram divididos dessa forma?

- **`App.tsx`** é o único responsável por gerenciar o estado global (`useState`). Ele distribui dados e callbacks para os filhos via props, garantindo um **fluxo de dados unidirecional** (padrão React).

- **`Dashboard.tsx`** é isolado para que os contadores dinâmicos possam ser atualizados de forma independente sem re-renderizar a lista de filmes desnecessariamente.

- **`CardFilme.tsx`** é um componente *puro* (stateless): recebe um filme e callbacks por props e não guarda estado próprio, tornando-o altamente **reutilizável e testável**.

- **`Sidebar.tsx`** encapsula toda a lógica de filtragem visual, mantendo o `App.tsx` limpo.

- **`interfaces/IFilme.ts`** centraliza todos os tipos TypeScript, evitando duplicidade e garantindo **segurança de tipos** em toda a aplicação.

- **`data/filmes.ts`** separa os dados do código de apresentação, facilitando a futura substituição por uma API real.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| React 19 + Vite | Framework e bundler |
| TypeScript | Tipagem estática |
| Bootstrap 5 (CDN) | Grid responsivo e utilitários |
| Google Fonts | Tipografia (Montserrat + Open Sans) |
| CSS customizado | Tema cinema escuro |

## 📋 Requisitos Atendidos

- ✅ Componentização com componentes reutilizáveis
- ✅ TypeScript com interfaces para todas as Props e estados
- ✅ Layout responsivo assimétrico (col-3 / col-9 no desktop)
- ✅ Tags semânticas HTML5: `header`, `main`, `section`, `aside`, `address`, `footer`
- ✅ Dashboard com contadores dinâmicos
- ✅ Interação com mudança de status visual e atualização dos contadores
- ✅ Bootstrap via CDN + CSS externo customizado
- ✅ Rodapé com identificação do aluno e disciplina

## 👨‍💻 Identificação

**Aluno:** Vitor Leal  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplina:** Desenvolvimento Front-End — Prof. Fernando  
