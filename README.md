# ![Logo](https://github.com/carla-santos/veganfood/blob/main/img/logo.png)

[![GitHub contributors](https://img.shields.io/github/contributors/carla-santos/veganfood?color=blue&label=Colaboradores&style=for-the-badge)](https://github.com/carla-santos/veganfood/graphs/contributors)
[![GitHub forks](https://img.shields.io/github/forks/carla-santos/veganfood?color=green&style=for-the-badge)](https://github.com/carla-santos/veganfood/network/members)
[![GitHub issues](https://img.shields.io/github/issues/carla-santos/veganfood?color=red&style=for-the-badge)](https://github.com/carla-santos/veganfood/issues)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/carla-santos/veganfood?color=pink&style=for-the-badge)](https://github.com/carla-santos/veganfood/pulls)

## Sumário

- [Sobre](#sobre-o-projeto)
   - [Tecnologias](#tecnologias) 
- [Como executar o projeto](#como-executar-o-projeto)
   - [Pré-requisitos](#pre-requisitos)
   - [Instalação](#instalacao)    
- [Agradecimento](#agradecimento)
- [Deploy](#deploy)
- [Changelog](#changelog) 

## :green_book: Sobre o projeto <a name = "sobre-o-projeto"></a>

[![Screenshot](https://github.com/carla-santos/veganfood/blob/main/img/Screenshot.png)](https://veganfood-eat.netlify.app/)

O projeto **VeganFood** foi desenvolvido como uma forma de praticar **HTML5, CSS3 e Javascript.** Trata-se de uma serviço de assinatura de comida vegana, 
à qual os clientes poderão escolher dentre uma lista de opções os alimentos que mais gostam e assim serão montadas suas refeições pela equipe de Nutricionistas e, 
posteriormente, entregues a sua casa. Possui 2 planos: Básico e Premium. O projeto foi desenvolvido com HTML Semântico, CSS3 com Flexbox e CSS Grid, 
metodologia BEM (Block Element Modifier) para nomear classes e vanilla Javascript para fazer os seguintes efeitos: Menu mobile, rolagem suave(smooth scroll),
menu scroll fixo e animação ao Scroll. Esse projeto teve como base o curso [Build Responsive Real-World Websites with HTML and CSS](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/) do professor **Jonas Schmedtmann**

- Utilizei como base [7-1 architecture pattern](https://github.com/KittyGiraudel/sass-boilerplate) para criar os arquivos do SASS dentro do diretório **src/scss**. Lá consta um arquivo principal chamado **main.scss** que tem a função de importar os arquivos parciais dentro de sua respectiva pasta.
- Em cada pasta, consta um arquivo **index.scss** que lista cada um dos outros arquivos, no mesmo diretório, que vão ser incluídos na importação.
- O diretório **build** consta o arquivo **main.css** minificado para o deployment do projeto.
- Adicionei **SASS** ao projeto como uma forma melhor de organizar os diferentes componentes e, por conseguinte, uma melhor manutenção ao mesmo.

### Tecnologias <a name = "tecnologias"></a> :wrench:

O projeto foi desenvolvido com **JavaScript**, além de **HTML5** e **SASS(SCSS)**. Foi usado **NPM** como gerenciador de pacotes e **GULP** para compilar SASS em CSS, 
além de outras dependências utilizadas no desenvolvimento, tais como: Adicionar prefixos proprietários, minificação(compressão).

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [SASS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Arquitetura BEM](http://getbem.com/)
- [NPM](https://www.npmjs.com/)
- [GULP](https://gulpjs.com/)
- [Prettier](https://prettier.io/)

---

## :computer: Como executar o projeto <a name = "como-executar-o-projeto"></a>

Para Iniciar o projeto, faça o clone desse repositório ou baixe de forma local em seu sistema. 
Você pode visualizar clicando no link [Veganfood](https://veganfood-eat.netlify.app/).

### Pré-requisitos <a name = "pre-requisitos"></a>

Antes de começar, você precisa instalar, em sua máquina, as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) 
e um editor de código, como [VSCode](https://code.visualstudio.com/).

Siga as instruções abaixo para obter uma cópia local: 

### Instalação <a name = "instalacao"></a>

```bash

# Clone este repositório.
$ https://github.com/carla-santos/veganfood.git

# Acesse a pasta do projeto no seu terminal/cmd/(Git bash).
$ cd veganfood

# Instale as dependências.
$ npm install

# Execute a aplicação.
$ gulp dev

```
Utilize uma ferramenta como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para criar um servidor local e executar o projeto.

---

## 🚀 Agradecimento <a name = "agradecimento"></a>  

- [Img Shields](https://shields.io)
- [Netlify](https://www.netlify.com/)
- [NPM](https://www.npmjs.com/)
- [Google Fonts](https://fonts.google.com/)
- [SASS guidelin](https://sass-guidelin.es/#architecture)
- [CSS-Tricks](https://css-tricks.com/introducing-sass-modules/)
- [Font Awesome](https://fontawesome.com)
- [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/)

---

## 📬 Deploy <a name = "deploy"></a>  

[![Deploy no Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/sites/veganfood-eat/deploys)

---

## :dizzy: Changelog <a name = "changelog"></a>  

### 1.0.0
- Lançamento inicial<br>

### 2.1.0

📦 Dependências

- Adiciona as dependências de desenvolvimento: **babel, babel-loader, eslint, eslint-config-prettier, webpack e webpack-cli.** 
- Atualiza as dependências de desenvolvimento: **autoprefixer, cssnano, gulp-sass, postcss e sass.**
- Elimina as dependências de desenvolvimento: **gulp-concat, gulp-rename e gulp-terser.**

🧰 Outras mudanças

- Atualiza arquivo de configuração do Webpack.
- Refatora Scroll Suave.
-  Cria pasta components .
-  Elimina componenente animation fade.
-  Refatora Menu mobile.
-  Refatora navegação fixa.
-  Refatora galeria.
-  Refatora Slider.
