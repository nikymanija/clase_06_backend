const http = require('http')

const server = http.createServer((peticion,respuesta)=>{
 const now = new Date()
const mensaje = "Buenas Noches"
 if(now.getHours()>= 6 && now.getHours()<=12){
    mensaje = "Buenos Días"
 }else if(now.getHours()>12 && now.getHours()<=19) {
  mensaje = "Buenas Tardes"
 }
respuesta.end(mensaje)
})


const connectedServer = server.listen(8080, ()=>{
    console.log('server running..')
})