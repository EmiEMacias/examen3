import { empleados } from "../model/empleados.model.js"

export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
empleados.create({
    id:'Ni124',
    nombre:'Emily',
    apellido:"Macias",
    edad:23,
    departamento:'produccion',
    año_ingreso:2020
})
.then((empleados)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()