const express = require('express');
const routes = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://BancoCurriculo:BC1234@cluster0.uwy0n.mongodb.net/banco_curriculos?retryWrites=true&w=majority";


routes
.get('/', (req, res) => {res.send('Hello World!')})
.post('/cadastro', (req, res) => {
    MongoClient.connect(url, function(err, db) { // Faz conexão com o banco de dados
        if (err) throw err;
        var dbo = db.db("mongo_exemplo"); // Seleciona o banco de dados
        var myobj = req.body; // Extrai o JSON recebido
        console.log(myobj);
        dbo.collection("cadastros").insertOne(myobj, function(err, res) { // insere o JSON no Bando de Dados
          if (err) throw err;
          console.log("Inserção feita com sucesso!");
        });
        db.close();
      });
      res.send("Inserção feita com sucesso!");
})

module.exports = routes;
