import { tecnicos } from "../model/tecnicos.model.js"

export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
tecnicos.create({
    id:'niss8794',
    nombre:'Juan',
    apellido:"Perez",
    especialidad:"Reparacion",
    año_ingreso:2014,
    entrenados:10
})
.then((tecnicos)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()
