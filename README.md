# Sobre o projeto
<p> Este é um projeto, fictício, realizado durante o workshop Treinaweb Multi Stack#3 que tem por objetivo o aprendizado de novas tecnologias, 
e conceitos de arquiteturas, para a criação de aplicações de médio porte.</p>

<p>A aplicações tem como objetivo ajudar ONGs e pessoas que gostam de animais, pois muitas das vezes estas instituições passam por dificuldades
financeiras devido a alta quantidade de animais e a falta de espaço. Em contrapartida existem muitos casos de pessoas que acabam  não adotando estes devido a falta de tempo e espaço para a criação, foi pensando nisto que surgiu o projeto Adote Um Pet que oferece a possibilidade de que pessoas façam o processo de  adoção de forma virtual destes pets, ajudando assim estas ONGs a arcarem com os custos mensais deles.</p>




<img src="https://camo.githubusercontent.com/02914afc1f51d55c8acac01c200a410efd74fffdff325678f6df6c22ae68a7ee/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5048502d3737374242343f7374796c653d666f722d7468652d6261646765266c6f676f3d706870266c6f676f436f6c6f723d7768697465" /> <img src="https://camo.githubusercontent.com/316ccceb2c875497ee2197622c2040a241b8afe4ff78ab7cc0161ee2a644b8a3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c61726176656c2d4646324432303f7374796c653d666f722d7468652d6261646765266c6f676f3d6c61726176656c266c6f676f436f6c6f723d7768697465" /> <img src="https://camo.githubusercontent.com/6cf9abe9d706421df40ff4feff208a5728df2b77f9eb21f24d09df00a0d69203/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3030374143433f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465" /> <img src="https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642" /> <img src="https://camo.githubusercontent.com/2c2e3cab0541596a12e216df86e68fa554256f25826b55a068993a3edfbcd0e8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6174657269616c2d2d55492d3030383143423f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6174657269616c2d7569266c6f676f436f6c6f723d7768697465" /> <img src="https://camo.githubusercontent.com/932123bf240349f3785c02228b113b06299079e8740f480c767e8335fd6d752a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3037343035453f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d7768697465" />


# A aplicação consiste das seguintes funcionalidades

- Área para o cadastro de novos pets
<p><img src="frontend/public/to_readme/media.gif" /></p>



- Lista de Pets onde também será possível fazer a adoção de algum Pets
<p><img src="frontend/public/to_readme/media2.gif" /></p>



- Relatório para controle interno de todas as adoções realizadas
<p><img src="frontend/public/to_readme/media3.PNG" /></p>



# Pré-requisitos

Antes de comecar, voce vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/), [PHP7](https://www.php.net/) e o [Composer](https://getcomposer.org/).
Além disto é bom ter um editor de texto para para trabalhar com o código fonte como [VSCode](https://code.visualstudio.com/).




# Configurações do projeto
- Na pasta 'adote-um-pet/backend' criar um arquivo .env seguindo o arquivo de exemplo '.env.example' e excluir as variáveis:

```bash
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
Pois são desnecessárias para o projeto.

- A seguir, alterae o valor do campo DB_CONNECTION para sqlite, como abaixo:

```bash
DB_CONNECTION=sqlite
```

 - Na pasta 'adote-um-pet/backend/database' crie um arquivo chamado 'database.sqlite' onde serão armazenados os dados da aplicação


# Como executar
```bash
#Baixar o repositório do projeto
git clone https://github.com/Gabriel962008/adote-um-pet.git

----------------INICIALIZANDO O BACKEND -------------
   
#acessando a pasta com o backend da aplicação 
cd adote-um-pet/backend
   
#baixando as dependências necessárias
composer install
   
#Criando a estrutura do banco de dados
php artisan migrate

#estartando o backend
php artisan serve
   
#Você deverá receber a seguinte saída em seu terminal: 
# - Starting Laravel development server: http://127.0.0.1:8000

----------------INICIALIZANDO O FRONTEND -------------    
#acessando a pasta com o frontend da aplicação 
cd adote-um-pet/frontend
   
#baixando as dependências necessárias
npm install 
   
#estartando o frontend
npm run dev
   
#Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.
  
```
