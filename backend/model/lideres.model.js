import {Schema, model} from 'mongoose'
export const esquema_lideres= new Schema({
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
    carrera:{
        type:String,
        require:true
    }
})

export const lideres = new model('lideres', esquema_lideres)