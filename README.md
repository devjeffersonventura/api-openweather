# Projeto de Previsão do Tempo

Este é um projeto simples que usa Node.js, TypeScript e a API do OpenWeatherMap para obter dados climáticos.

## Requisitos

- Node.js
- npm
- Uma chave API do OpenWeatherMap

## Instalação

1. Clone este repositório para o seu computador local.
2. Navegue até a pasta do projeto no terminal.
3. Execute `npm install` para instalar as dependências do projeto.
4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave API do OpenWeatherMap como `API_KEY`.

## Uso

1. Inicie o servidor com `npm start`.
2. Faça uma solicitação GET para `http://localhost:3000/weather/:city`, substituindo `:city` pelo nome da cidade para a qual você deseja obter dados climáticos.
