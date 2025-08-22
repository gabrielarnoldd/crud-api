//importar pacote do mysql
const mysql= require('mysql2')
 
// criar conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud_api'
})
 
//testar conexão
connection.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log('Mysql conectado');
    }
});
 
module.exports = connection;
 