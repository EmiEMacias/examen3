import {Schema, model} from 'mongoose'
export const esquema_exportacion= new Schema({
    id:{
        type:String,
        require:true
    },
    nombre:{
        type:String,
        require:true
    },
    pais:{
        type:String,
        require:true
    },
    departamento:{
        type:String,
        require:true
    }
})

export const exportacion = new model('exportacion', esquema_exportacion)