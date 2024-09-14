const express = require("express")
const router = express.Router()

const app = express()
const rayza = 333

function mostreOla(resquest, response){
    response.send("Bem-vinda!")
}


function mostraRayza(){
    console.log("Servidor criado e rodando",rayza)
}
app.use(router.get("/ola", mostreOla))
app.listen(rayza,mostraRayza)