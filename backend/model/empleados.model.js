import {Schema, model} from 'mongoose'
import {esquema_becarios} from "./becarios.model.js"
export const empleados = new model('empleados', esquema_becarios)