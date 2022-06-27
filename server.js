
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
let visitas=0  

app.get('/', (request,response)=>{
    response.send({mensaje:'Saludos a mi amigo Martin!'})
})


app.get('/visita',(req,res)=>{
  
visitas++
res.send(`Este sitio tuvo${visitas} totales`)
})




const server = app.listen(PORT,()=>{
    console.log(`Server Listenig [${PORT}]...`);
})

server.on('error', e=>console.log(`Error On Server`,e))