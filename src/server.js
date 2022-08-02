// variavel para o express
const express = require ('express');
// variavel de ambiente - é um arquivo que vai servir de auxilio para saber as informações do servidor
const dotenv = require ('dotenv');
// template engine mustache
const mustache = require ('mustache-express');
// 
const path = require ('path');

// criando a variavel server que irá armazenar o express
const server = express();

dotenv.config();

// configuração do mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));