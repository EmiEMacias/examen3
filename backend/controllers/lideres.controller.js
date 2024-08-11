import {lideres} from "../model/lideres.model.js"
export const test =() =>{
    console.log('Si funcina la conexion de cliente')
}
lideres.create({
    id:'der457',
    nombre:'Juan',
    apellido:'lopez',
    especialidad:'ingeniero tecnico',
    año_ingreso:2016,
    carrera:'ingeniero industrial'
})
.then((lideres)=>{
    console.log("Datos insertados")
})
.catch((err)=>{
    console.log("error al ingresar datos")
})
export default test()