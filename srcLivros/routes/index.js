const express = require ('express');
const router = express. Router();

router.get ('/', (req,res) => {
    res.send({
        title: "Meus filmes",
        nome: "Aline"
    })
});

module.exports = router;