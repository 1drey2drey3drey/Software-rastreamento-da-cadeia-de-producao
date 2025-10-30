# Projeto de Rastreamento da Cadeia de Produção de Açaí (Hackathon)

## Sobre o Projeto

Este projeto foi desenvolvido durante um hackathon e tem como objetivo rastrear a cadeia de produção do açaí, desde o produtor até o extrator. A ideia é garantir a qualidade e a transparência do processo, permitindo que o consumidor final tenha acesso a informações sobre a origem e o trajeto do produto.

O mapeamento geográfico da produção e logística foi implementado utilizando **Leaflet.js**.

## Descontinuação e Futuro do Projeto

O projeto foi criado especificamente para o hackathon e não teve continuidade após o evento. Ele serve como um protótipo e uma prova de conceito da ideia original.

**Atenção:** Esta é provavelmente a versão final do projeto, considerando que o **Firebase Dynamic Links foi descontinuado**. A partir de 25 de agosto de 2025, este serviço não estará mais disponível, o que impacta a funcionalidade de compartilhamento e rastreamento de links dinâmicos que era planejada para o projeto.

## Tecnologias Utilizadas

*   **Frontend:**
    *   React
    *   React Router
    *   Context API
    *   Axios
    *   Tailwind CSS
    *   Leaflet.js
*   **Backend:**
    *   Firebase (utilizando Firebase Authentication e Firestore Database)
*   **Outras ferramentas:**
    *   Vite.js

## Pré-requisitos

*   Node.js (v18+)
*   NPM ou Yarn

## Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/1drey2drey3drey/Software-rastreamento-da-cadeia-de-producao.git
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd Software-rastreamento-da-cadeia-de-producao
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```
4.  **Execute o projeto:**
    ```bash
    npm run dev
    ```
    ou
    ```bash
    yarn dev
    ```

Após executar o comando `dev`, o projeto estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).
