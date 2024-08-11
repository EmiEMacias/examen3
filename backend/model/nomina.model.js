import {Schema, model} from 'mongoose'
export const esquema_nomina= new Schema({
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
    sueldo:{
        type:Number,
        require:true
    },
    infonavit:{
        type:Number,
        require:true
    },
    seguro:{
        type:Number,
        require:true
    },
    impuestos:{
        type:Number,
        require:true
    },
    sueldo_final:{
        type:Number,
        require:true
    }
})

export const nomina = new model('nomina', esquema_nomina)