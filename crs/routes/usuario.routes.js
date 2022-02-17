const express = require('express');
const controladorUsuario = require('../controllers/asignacion.controller');


const api = express.Router();

api.post('/obtenerAsignacion', controladorUsuario.obtenerAsignacion);
api.post('/agregarAsignacion', controladorUsuario.agregarAsignacion);


module.exports = api;