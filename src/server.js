const express = require("express");
const cors = require ('cors')
const porta = 3000;
const app = express();
 
 
app.use(cors());
app.use(express.json())
 
app.listen(porta, ()=> console.log(`Rodando na porta ${porta}`))
 
const connection = require('./db_config')
 

  app.post ('/usuario/cadastrar', (request, response) => {
    //criar um array com os dados recebidos
    //declaração do vetor
    let params = Array (
        request.body.name,
        request.body.email,
        request.body.password,
        request.body.cpf_number
    );
    //criar o comando de execução no banco de dados
    let query = "INSERT INTO users (name, email, password, cpf_number) VALUES (?, ?, ?, ?);"
    //passar o comando e os dados para função query
    connection.query(query, params, (err, results) => {
        if (results) {
          response
          .status(201)
          .json({
            success: true,
            message: "Sucesso",
            data: results
          })
        } else {
          response
          .status(400)
          .json({
            success: false,
            message: "Sem sucesso",
            data: err
          })
        }
    })
})
 

 
// app.get('/usuario/listar', (reqest,respnse)=>{
//   ...
// })
 
// app.put('/usuario/editar/:id', (reqest,respnse)=>{
//   ...
// })
 
// app.delete('/usuario/deletar/:id', (reqest,respnse)=>{
//   ...
// })
 
 
 