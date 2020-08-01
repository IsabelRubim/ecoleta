# :recycle: Ecoleta

:rocket: Aplicação feita na semana NLW 1.0 para ajudar pessoas a encontrarem pontos de coleta para reciclagem.

![versão web](https://i.imgur.com/q4Ii3Bd.png)

Construído com:
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)

# Como usar

- Pré-requesitos

  - [Node.js](https://nodejs.org/en/) instalado
  - Gerenciador de pacotes [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
  - [Expo](https://expo.io/) instalado global na sua máquina

## Clone este repo

``git clone https://github.com/IsabelRubim/ecoleta.git``

## Instalação

### Back-end

```
$ cd server
$ npm install
$ npm run knex:migrate
$ npm run knex:seed

# Inicie a API
$ npm run dev
```

### Front-end

```
$ cd web
$ npm install
$ npm start
```

### Mobile

:warning: Caso você já tenha o **Expo CLI** instalado globalmente, não há necessidade de instalar novamente.

Para o mobile, primeiro coloque o endereço ip do seu computador no arquivo `src/services/api.js`, em seguida execute os comandos:

```
$ npm -g add install expo-cli
$ cd mobile
$ npm install
$ expo start
```

Assim que o processo terminar, automaticamente será aberta uma página no seu navegador `localhost:92002`. 
Conecte seu celular com o aplicativo Expo que pode ser baixado na Play Store ou App Store em seguida escaneie o código QR :blush:

## :art: Melhorias

Algumas melhorias no layout foram feitas para melhor usabilidade na web.

## :bookmark: Gostaria de contribuir?

- Fork este repositório
- Crie uma branch com a sua feature: ``git checkout -b my-feature``
- Adicione suas mudanças: ``git add .``
- Commit suas mudanças: ``git commit -m "your-message"``
- Push a sua branch: ``git push origin my-feature``
