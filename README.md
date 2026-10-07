# Conversor de Moedas

SPA em React que consome a API Exchangerate.host para mostrar cotações de
moedas. Projeto da disciplina Programação Web Fullstack.

## Rodando o projeto

```bash
npm install
cp .env.example .env
```

Preenche o `.env` com sua access_key (pega uma gratuita em exchangerate.host):

```
VITE_API_KEY_EXCHANGERATES=sua_chave_aqui
```

```bash
npm run dev
```

Abre em `http://localhost:5173`.

Padrão de commit/branch está no `CONVENTIONS.md`.

## Estrutura das pastas

```
src/
├── api/          -> chamada HTTP pra API (exchangerate.js)
├── reducers/      -> estado da conversão (currencyReducer.js)
├── hooks/          -> useExchangeRates.js, junta o reducer com a api
├── components/     -> CurrencyConverter.jsx, a tela
├── assets/
├── App.jsx
└── main.jsx
```

Separamos por tipo de arquivo: a pasta `api` só cuida de chamar a API, o
`reducers` só cuida do estado, o `hooks` junta os dois, e o `components`
só desenha a tela. Assim cada parte fica isolada e dá pra saber de quem
foi cada pedaço.

Fluxo: o usuário mexe na tela -> o componente chama o hook
`useExchangeRates` -> o hook usa `useReducer` pra controlar o estado
(loading, erro, resultado) e chama o `api/exchangerate.js` -> que busca a
cotação na Exchangerate.host.

**Hook usado:** useReducer, pra centralizar o estado da conversão em vez
de ficar com vários useState espalhados.

**Biblioteca externa:** [nome da lib] — usada pra [motivo].

**API usada:** Exchangerate.host (endpoint `/live`), documentação em
`docs/api.md`.

## Uso de IA no desenvolvimento

Usamos o Claude (Anthropic) em algumas partes do projeto:

- Pra organizar as tarefas da equipe num quadro Kanban
- Pra validar os endpoints da API e documentar os campos do retorno
- Pra discutir qual hook fazia mais sentido usar e por quê
- Pra gerar um primeiro rascunho do reducer e um mock da API, pra dar pra
  testar sem depender do serviço real ainda
- Pra revisar um PR e achar um bug no tratamento de timeout
- Pra reorganizar a estrutura de pastas do projeto

Tudo que veio da IA a gente revisou, testou e ajustou antes de commitar.
