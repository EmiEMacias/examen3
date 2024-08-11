import {Schema, model} from 'mongoose'
import {esquema_entrenadores} from "./entrenadores.model.js"
export const tecnicos = new model('lideres', esquema_entrenadores)