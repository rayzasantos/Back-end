const mongoose = require('mongoose')
require('dotenv').config()

 async function conectaBancodedados() {
    try{
        console.log( 'Conexão com o banco de dados iniciou')
        await mongoose.connect(process.env.MONGO_URL) // conectar de forma assicrona 

        console.log('Conexão com o banco de dados feita com sucesso!')

    } catch(erro) {

        console.log(erro)

    }

}



module.exports = conectaBancodedados