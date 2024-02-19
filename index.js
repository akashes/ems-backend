// import express
const express = require('express')
//import cors
const cors = require('cors')

//import logic
const logic=require('./services/logics')

//create a backend application using express
const emsServer= express()


//connecting frontend application using cors
emsServer.use(cors(
    {
        origin:'http://localhost:3001'
    }
))

//to convert json data to js and viceversa using json() function from express

emsServer.use(express.json())

//defining port number
emsServer.listen(8000,()=>{
    console.log(`ems server listening on the port 8000`);
})

//api  call for get all employees
//using express.js route handler to handle HTTP GET requests to the /get-all-employees endpoint
emsServer.get('/get-all-employees',(req,res)=>{
    logic.getAllEmployees().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

//adding an employee
emsServer.post('/add-an-employee',(req,res)=>{
    logic.addEmployee(req.body).then((response)=>{
        res.status(response.statusCode).json(response)
    })

})


emsServer.delete('/delete-an-employee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


emsServer.get('/get-an-employee/:id',(req,res)=>{
    logic.getAnEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

emsServer.post('/update-an-employee/:id',(req,res)=>{
    logic.editEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})