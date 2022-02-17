const Encuesta = require('../models/cursos.models');

function agregarCurso(req, res) {
    var parametros = req.body;
    var modeloCurso = new Curso();

    if( req.user.rol == "Maestro"){
          modeloCurso.pregunta = parametros.nombre;
        modeloCurso.idMaestro = req.user.sub; 

        modeloCurso.save((err, cursoGuardada) => {
            if(err) return res.status(500).send({ mensaje: 'Error en la peticion'});
            if(!cursoGuardada) return res.status(500).send({ mensaje: 'Error al agregar la Curso'})

            return res.status(200).send({ curso: cursoGuardada });
        })

    } else {
        return res.status(500).send({ mensaje: 'Debe ingresar los parametros obligatorios' });
    }
}


function obtenerCurso(req, res) {
    Cursos.find({}, (err, cursoEncontrados)=>{
        if(err) return res.status(500).send({ mensaje: 'Error en la Peticion'});
        if(!cursoEncontrados) return res.status(500).send({ mensaje: 'Error al obtener los cursos'});

        return res.status(200).send({ curso: cursoEncontrados })
    }).populate('idMaestro', 'nombre')
}


module.exports = {
    agregarCurso,
    obtenerCurso
}