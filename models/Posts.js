const mongoose = require('mongoose')

//Definindo o esquema dos Posts
//É semelhante a um 'Create table' do MySQL
const postsSchema = new mongoose.Schema({
    titulo: {type: String, require: true},
    msg: {type: String, require: true},
    tipo_msg: {type: Number, require: true},
    autor: {type: String, require: false}
  })

  //Exporta os dados de 'Posts' para outro codigo .js
  module.exports = mongoose.model('Posts', postsSchema)