const express = require('express');
const server = express();
const routes = require("./routes");
const path = require("path");

// utilizando template engine
server.set('view engine', 'ejs');

// Mudar a Localização da pasta views
server.set('views', path.join(__dirname, 'views'))

// rota para os arquivos estaticos
server.use(express.static("public"))

// utilizando o req.body
server.use(express.urlencoded({extended: true}))

// routes 
server.use(routes)

server.listen(3000, () => console.log('rodando'))