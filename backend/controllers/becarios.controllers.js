import { becarios } from "../model/becarios.model.js"

export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
becarios.create({
    id:'nuss4578',
    nombre:'Pedro',
    apellido:"Lopez",
    edad:22,
    departamento:"pintura",
    año_ingreso:2022
})
.then((mvc)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()
