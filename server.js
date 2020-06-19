
const express = require('express')
const bodyParser = require('body-parser')

// Inicializar variáveis
const app = express()

// Configurações do body-parser
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )

// Decçarção e Importação do módulos das rotas abaixo
const alunosRoutes = require('./routes/alunos.routes')


// Registre Abaixo a rota que concentra o recurso para os alunos - CRUD
app.use( '/alunos', alunosRoutes )
// Abaixo está a declaração do Servidor - localhost:3000
const PORTA = 3000
app.listen( PORTA,  _ => console.log(`Express server rodando na porta ${PORTA}`) )

