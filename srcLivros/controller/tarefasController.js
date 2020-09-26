const tarefas = require ("../model/tarefas.json");

const getAll = (req,res) =>{
    console.log (req.url);

    res.send (tarefas);
};

const getByano = (req,res) =>{
    const ano= req.params.ano;

    res.send (tarefas.find((tarefa)=> tarefa.ano == ano));
};

module.exports = {getAll,getByano};