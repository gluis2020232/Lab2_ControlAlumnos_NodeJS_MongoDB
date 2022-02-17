const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CursoSchema = Schema({

    idCurso: { type: Schema.Types.ObjectId, ref: 'Cursos'},
    idMaestro: { type: Schema.Types.ObjectId, ref: 'Usuarios'}
})

module.exports = mongoose.model('asignacion', AsignacionSchema);