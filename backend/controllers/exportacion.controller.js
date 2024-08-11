import { exportacion } from "../model/exportacion.model.js"

export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
exportacion.create({
    id:'der47563',
    nombre:'puerta',
    pais:"Europa",
    departamento:"Pintura"
})
.then((exportacion)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()
