const Contenedor = require("./mainfinal");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

let contenedor = new Contenedor("productos.txt");


function randomFun (min,max)
{ 
  return Math.floor(Math.random()* (max - min) + min);
  
}

resRandom = randomFun(2,3);


app.get("/productos", async (request, response) => {
  await contenedor.init();
  response.json(contenedor.getAll());
});

app.get("/productosRandom", async (request, response) => {
  await contenedor.init();
  response.json(contenedor.getById(resRandom));
});

const server = app.listen(PORT, () => {
  console.log(`Server Listenig [${PORT}]...`);
});

server.on("error", (e) => console.log(`Error On Server`, e));
