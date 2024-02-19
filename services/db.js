// connecting node and mongodb

//import mongoose
const mongoose= require('mongoose')

//connection string
mongoose.connect('mongodb://localhost:27017/EMS')

//model creation
//defines the structure of the document in the collection
const employee = mongoose.model('employee',{
    id:String,
    name:String,
    age:String,
    designation:String,
    salary:String
})

module.exports={
    employee
}