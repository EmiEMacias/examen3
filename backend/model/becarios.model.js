import {Schema, model} from 'mongoose'
export const esquema_becarios= new Schema({
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
    edad:{
        type:Number,
        require:true
    },
    departamento:{
        type:String,
        require:true
    },
    año_ingreso:{
        type:Number,
        require:true
    }
})

export const becarios = new model('becarios', esquema_becarios)
