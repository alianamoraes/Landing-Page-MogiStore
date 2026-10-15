# 🕶️ Mogi Store — Premium Streetwear Landing Page

Uma experiência digital com estética editorial urbana e brutalista desenvolvida sob medida para a **Mogi Store**, boutique referência em moda masculina premium em Mogi das Cruzes - SP. O projeto traduz o posicionamento de luxo da marca em uma interface de alta conversão, unindo direção visual refinada a pontos estratégicos de contato comercial.

---

## 🎯 Objetivos do Projeto

*   **Autoridade de Marca:** Apresentar a Mogi Store como o principal polo de streetwear de alto padrão do Alto Tietê.
*   **Conversão Direta:** Conduzir o visitante de forma intuitiva da descoberta de peças ao fechamento via WhatsApp.
*   **Curadoria Visual:** Destacar peças, coleções e acessórios reais através de uma vitrine digital consistente e imersiva.
*   **Engajamento de Proximidade:** Facilitar a transição do cliente digital para canais sociais oficiais e visitas à loja física.

---

## 🛠️ Stack Tecnológica

O ecossistema técnico foi selecionado para entregar performance extrema, SEO agressivo e segurança de código:

*   **Next.js (App Router)** — Framework React de última geração focado em renderização veloz e indexação de buscas.
*   **TypeScript** — Tipagem estática para robustez estrutural do código e prevenção de quebras em produção.
*   **Tailwind CSS** — Utilitários de estilização flexíveis, permitindo layouts altamente customizados e responsividade cirúrgica.
*   **Lucide Icons** — Pacote de ícones minimalistas em formato vetorizado e de carregamento leve.
*   **Next Image Component** — Otimização nativa de formato, dimensionamento e Lazy Loading de assets de imagem.

---

## ✨ Principais Recursos e Diferenciais

*   **Estética Brutalista de Luxo:** Direção de design sofisticada, alternando blocos minimalistas e contrastes de tons escuros inspirados em marcas globais (Nike, Adidas, Balenciaga).
*   **Mobile-First Responsivo:** Layout rigorosamente recalibrado para dispositivos móveis, garantindo leitura agradável de depoimentos e botões compactos elegantes que não poluem a tela.
*   **Imagens Reais Incorporadas:** Hero estruturado com a fachada real arquitetônica da loja e cards de catálogo exibindo produtos reais (Baw, Ellus, Osklen, New Era).
*   **Fluxo de Cliques Ativado (CTA):** Links interativos "Descobrir peça" amarrados diretamente ao WhatsApp comercial da boutique.
*   **Depoimentos de Alta Costura:** Seção "Quem veste, recomenda" em formato typographic limpo, estruturada de forma fluida no celular para evitar quebras de palavras inadequadas.
*   **Menu de Conectividade:** Botão de WhatsApp em formato de ícone elegante e menu alternativo compacto integrado a redes monocromáticas (Instagram, TikTok, Facebook).
*   **Acessibilidade e SEO:** HTML semântico, textos alternativos funcionais em todas as mídias, foco lógico e metadados configurados nativamente via App Router.

---

## 📁 Estrutura Principal do Projeto

A organização de pastas segue os padrões modulares da arquitetura Next.js:

```text
├── app/
│   ├── layout.tsx       # Estrutura global do documento e injeção de metadados
│   ├── page.tsx         # Componente principal contendo as seções da Landing Page
│   └── globals.css      # Tokens visuais, reset de estilos e responsividade base
├── public/
│   ├── images/          # Assets fotográficos reais da loja e catálogo de produtos
│   ├── favicon.png      # Miniatura oficial da marca para aba de navegadores
│   └── icon.svg         # Variação em vetor para escalabilidade visual
```

---

## 🚀 Instalação e Execução Local

### Pré-requisitos
*   **Node.js 18.18** ou superior.
*   Gerenciador de pacotes **npm 9** ou superior.

1. Clone o seu repositório privado para a sua máquina:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Entre no diretório raiz do projeto:
   ```bash
   cd mogi-store
   ```

3. Instale todas as dependências do ecossistema:
   ```bash
   npm install
   ```

4. Execute o ambiente de desenvolvimento local:
   ```bash
   npm run dev
   ```

5. O projeto estará acessível instantaneamente no navegador através do endereço:
   ```text
   http://localhost:3000
   ```

### Builds de Produção
Para compilar e validar o código final de entrega de maneira otimizada:
```bash
npm run build
npm run start
```

---

## 🌐 Deploy Contínuo com Vercel

O projeto foi totalmente integrado para deploy automatizado através da plataforma **Vercel** acoplada ao repositório GitHub:
*   Cada alteração disparada via `git push` na branch principal compila automaticamente uma nova versão estável de produção.
*   A plataforma identifica de forma autônoma o framework Next.js, as configurações de rotas do App Router e roda os scripts nativos do arquivo `package.json`.
*   As variáveis de ambiente do projeto e os tokens são inseridos estritamente dentro do painel administrativo da Vercel, impedindo o vazamento de chaves privadas no código público.

---
<p align="center">Desenvolvido por Aliana Moraes</p>
