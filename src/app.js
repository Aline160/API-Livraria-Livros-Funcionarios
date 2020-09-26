const express = require ('express');
const app = express();


const index = require ("./routes/index");
const tarefas = require ("./routes/tarefasRoutes");

app.use ((req,res,next) => {
    console.log ("Nova requisicao realizada")

    next();
});

app.use("/",index);
app.use("/tarefas",tarefas);

module.exports = app;