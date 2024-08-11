import { importacion } from "../model/exportacion.model.js"

export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
importacion.create({
    id:'der47563',
    nombre:'llanta',
    pais:"Europa",
    departamento:"Pintura"
})
.then((importacion)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()
