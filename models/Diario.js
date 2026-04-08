const mongoose = require('mongoose')

const diarioSchema = new mongoose.Schema(
    {
        titulo: {type: String},
        descricao: {type: String}
    }

)

modulo.exports = mongoose.model('Diario', diarioSchema)