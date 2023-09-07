const express = require("express");
const app = express();
app.listen(8081, function(){
    console.log("Rodando na url http://localhost:8081")
});
//apenas essas linhas são capazes de criar servidor com express
