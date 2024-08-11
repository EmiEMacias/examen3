import {Schema, model} from 'mongoose'
export const esquema_entrenadores= new Schema({
    id:{
        type:String,
        require:true
    },
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    especialidad:{
        type:String,
        require:true
    },
    año_ingreso:{
        type:Number,
        require:true
    },
    entrenados:{
        type:Number,
        require:true
    }
})

export const entrenadores = new model('entrenadores', esquema_entrenadores)