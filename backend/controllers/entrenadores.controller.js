import { entrenadores } from "../model/entrenadores.model.js"

export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
entrenadores.create({
    id:'nis487',
    nombre:'Juan',
    apellido:"Perez",
    especialidad:"revision",
    año_ingreso:2010,
    entrenados:5
})
.then((entrenadores)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()