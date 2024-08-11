import mongoose from 'mongoose'; 
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv'; 
import {test} from './backend/controllers'

dotenv.config();
mongoose.connect(process.env.url)
.then (()=> {
    console.log("Si funciona la base de datos")
})
.catch((error)=>{
    console.log ("No funciona la base de datos")
})
const app =express(); 
app.use (cors());

app.listen(4005,()=>{  
    console.log ('Funciona mi servidor')
})

test()