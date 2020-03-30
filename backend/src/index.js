const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
/**
 * METODOS HTTP
 * 
 * GET: Busca informações do backend
 * POST: Envia informações para o backend 
 * PUT: Altera informações do backend
 * DELETE: Deleta informações do backend
 * 
 */
/**
 * Tipos de Parametros
 * 
 * Query Params: Parametros nomeados enviados na rota apos "?" (filtros, paginação)
 *      para acessar usamos o request.query
 * Route Params: Parametros usados para identificar recursos
 *      para acessar os params usamos o request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *      para acessar usamos request.body
 */
// app.post('/users', (request, response) => {
    // como exemplo: Usando /users/:id pegamos o conteudo com request.params
            //usamos request.params para acessar os parametros não nomeados
    // como exemplo: usando /users?nome=daniel pegamos o conteudo com request.query
            //usamos request.query para acessar os parametros nomeados
    // Como exemplo: passando informações por request body podemos acessar com request.body
            //usamos request.body para acessar as informações passadas por post.
//     const body = request.body
//     console.log(body)

//     return response.json({
//         evento: 'Semana omnistack 11.0',
//         aluno: 'Daniel Meireles'
//     })
// });

app.listen(4444);