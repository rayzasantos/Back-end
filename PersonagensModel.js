const mongoose = require('mongoose')
const { stringify } = require('uuid')
const personagnsSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true
    },

    imagem:{
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required:true
    }

})

module.exports = mongoose.model('personagem',personagnsSchema)