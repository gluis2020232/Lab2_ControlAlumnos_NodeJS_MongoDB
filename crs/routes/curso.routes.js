const express = require('express');
const controladorUsuario = require('../controllers/cursos.controller');


const api = express.Router();

api.post('/agregarCurso', controladorCursos.agregarCurso);
api.post('/obtenerCurso', controladorCursos.obtenerCurso);


module.exports = api;