import {Schema, model} from 'mongoose'
import {esquema_exportacion} from "./exportacion.model.js"

export const importacion = new model('importacion', esquema_exportacion)