var http = require('http')//o móddulo HTTP ja vem padrao no node
//req = requisição
//res = resposta para usuário
http.createServer(function(req, res){
    res.end("Ola!")
}).listen(8081)//abre um servidor HTTP na porta 8081 e manda uma resposta ao usuário(para acessar:'localhost:8081' no navegador)

console.log("Servidor rodando")