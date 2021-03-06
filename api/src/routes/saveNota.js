const express = require('express')
const app = express()
const notas = require( '@notas' )

app.get('/', function (request, response) {
    var ndata = []
    ndata['titulo'] = request.query.titulo
    ndata['descripcion'] = request.query.descripcion
    ndata['estado'] = request.query.estado
    ndata['user'] = request.query.user
    
    notas.postNota( ndata, function( notas ) {
        return response.json( notas ) 
    } )
}) 

module.exports = app
