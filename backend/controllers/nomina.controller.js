import { nomina } from "../model/nomina.model.js"

export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
nomina.create({
    id:'nis451',
    nombre:'Juan',
    apellido:"Perez",
    sueldo:3000,
    infonavit:250,
    seguro:120, 
    impuestos:300,
    sueldo_final:2400
})
.then((nomina)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()
