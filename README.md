# Colégio Tíria – Website Institucional

Website institucional para uma escola de Ensino Fundamental (escola fictícia), desenvolvido como projeto acadêmico.

**UNINASSAU · Ciência da Computação · Turma 4NA**
**Disciplina:** Maturidade em Desenvolvimento de Software · **Professor:** Rafael Pacheco

**Integrantes:**

| Nome | Matrícula |
|---|---|
| André Matheus Oliveira de Sá | 01822223 |
| Luiza Leandro de Souza | 01802142 |

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Banner, diferenciais, depoimentos e chamada para ação |
| `/sobre` | Missão, visão, valores e história |
| `/estrutura` | Infraestrutura da escola |
| `/docentes` | Corpo docente |
| `/mensalidades` | Valores por segmento, itens inclusos e descontos |
| `/contato` | Formulário, WhatsApp e mapa do Google Maps |

## Tecnologias

React 18 · Vite · React Router · CSS puro (variáveis, Flexbox e Grid) · Lucide React · EmailJS · Netlify

## Como rodar

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist
npm run preview  # testa o build localmente
```

## Estrutura do projeto

```
public/            logo.svg e _redirects (rotas do React Router no Netlify)
src/data/escola.js textos, valores, docentes e contatos
src/App.jsx        cabeçalho, rotas, rodapé e botão do WhatsApp
src/pages.jsx      as 6 páginas
src/Logo.jsx       logotipo em SVG
src/styles.css     tema global (variáveis CSS)
```

## Personalização

- **Conteúdo:** edite `src/data/escola.js` (nome, contatos, valores, docentes, textos).
- **Cores:** variáveis no topo de `src/styles.css`. Paleta atual: branco `#FFFFFF` e púrpura de Tiro `#4F0341`.

## Formulário de contato (EmailJS)

1. Crie uma conta gratuita no [EmailJS](https://www.emailjs.com) e configure um serviço de e-mail e um template.
2. No template, use as variáveis `{{nome}}`, `{{email}}`, `{{telefone}}`, `{{assunto}}` e `{{mensagem}}`.
3. Copie `.env.example` para `.env` e preencha:
   ```
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ```

Sem essas chaves, o formulário abre o aplicativo de e-mail do visitante. O arquivo `.env` não vai para o Git (está no `.gitignore`).

## Deploy no Netlify

1. Envie o projeto para o GitHub.
2. No Netlify, escolha **Add new site → Import an existing project** e selecione o repositório.
3. Confirme o comando de build `npm run build` e a pasta `dist` (já definidos em `netlify.toml`).
4. Em **Site settings → Environment variables**, cadastre as três variáveis `VITE_EMAILJS_*`.

A cada `git push` na branch principal, o Netlify publica uma nova versão automaticamente.

## Observação

Todos os dados (nome da escola, telefone, endereço, docentes, depoimentos e mensalidades) são fictícios, criados para fins acadêmicos.
