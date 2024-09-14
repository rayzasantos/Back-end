const express = require("express")
const app = express()
const rayza = 333
function mostraRayza(){
    console.log("Servidor criado e rodando",rayza)
}

app.listen(rayza,mostraRayza)