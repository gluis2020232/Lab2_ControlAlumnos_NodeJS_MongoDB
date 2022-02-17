const Encuesta = require('../models/asignacion.models');


function obtenerAsignacion(req, res) {
    Asignacion.find({}, (err, asignacionEncontrada) =>{
        if(err) return res.status(500).send({mensaje: 'Error en la peticin'});
        if(err) return res.status(500).send({mensaje:'Error al obtener cursos.'});

        return res.status(200).send({asignacion: asignacionEncontrada})
    }).populate('idMaestro','idCursos')
}

function agregarAsignacion(req, res) {
    var parametros = req.body;
    var modeloAsignacion = new Asignacion();

    if(req.user.rol == "Maestro"){
        modeloAsignacion.idMaestro = req.user.sub;
        modeloAsignacion.idCursos = req.params.idCursos;

        modeloAsignacion.save((err , asignacionGuardada )=>{
            if(err) return res.status(500).send({ mensaje: 'Error en la peticion'});
            if(!asignacionGuardada) return res.status(500).send({ mensaje: 'Error en la peticion'});
            
            return res.status(200).send({asignacion: asignacionGuardada});
        })
    }else{
        return res.status(500).send({mensaje: 'Debe ingresra los parametros obligatiros'});
    }
}

module.exports =(
    agregarAsignacion,
    obtenerAsignacion
)