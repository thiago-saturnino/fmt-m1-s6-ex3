const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(8000, function () {
  console.log("Exemplo de app escutando na porta 8000!");
});

//npm init
//npm install express
//node index.js

// http://127.0.0.1:8000 exibe a mensagem Hello World
