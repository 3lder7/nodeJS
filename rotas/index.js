const express = require("express");
const app = express();
//apenas essas linhas são capazes de criar servidor com express
app.get("/", function(req, res){
    res.send("Bem-vindo ao meu app");
});
app.get("/sobre", function(res, res){
    res.send("Minha pagina sobre");
});
app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog");
});

app.get("/ola/:nome/:cargo/:cor", function(req, res){//criação de parâmetros
    res.send("Ola " +req.params.nome);//exibir os parâmetros
    //é possivel enviar o send apenas uma vez dentro de uma function/rota, por isso está tudo na memsa linha
});

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});

