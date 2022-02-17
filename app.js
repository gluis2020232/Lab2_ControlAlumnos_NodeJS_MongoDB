const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', function(req, res) {
    res.send('Hola mundo, estoy usando express!!!');
});

//PARAMETROS OBLIGATORIOS
app.get('/kinal/:idKinal', function(req, res) {
    var id = req.params.idKinal;
    res.send('Esta es una ruta para Kinalito y este es el valor del parámetro en ruta: ' + id);
});

//PARAMETOS OPCIONALES
app.get('/opcional/:idOpcional?', function(req, res) {
    var idOp = req.params.idOpcional;

    if (idOp !== undefined) {
        res.send('Este es el valor del parámetro en ruta Opcional: ' + idOp);
    }
    else {
        res.send('No hay ningun valor en la ruta.')
    }
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ControlAlumno', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Se ha conectado correctamente a la base de datos.');

    app.listen(3000, function (){
        console.log("Servidor de Express corriendo correctamente en el puerto 3000");
    });

}).catch(error => console.log(error));
