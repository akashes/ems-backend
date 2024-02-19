//backend logics

//import db.js file

const db = require('../services/db')

//get all employees details from the database

const getAllEmployees=()=>{
    return db.employee.find().then((result)=>{
        if(result){
            return {
                statusCode:200,
                employees:result
            }
        }else{
            return{
                statusCode:404,
                message:'cant find employee'
            }
        }
    })
}
//add a new employee detail into the database

const addEmployee=({id,name,age,designation,salary})=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
        //if id alreadty exists in the database
            return{
                statusCode:404,
                message:"Employee already exists"
            }
        }else{
          //  if id is not in the database
            const newEmployee= new db.employee({id,name,age,designation,salary})
            newEmployee.save()
            return{
                statusCode:200,
                message:"Employee added successfully"
            }

        }
    })

}


// const deleteEmployee=(id)=>{
//     return db.employee.findOne({id}).then((result)=>{
//         if(result){
//             return db.employee.deleteOne({id}).then((res)=>{
//                 return{
//                     statuesCode:200,
//                     message:"Employee deleted successfully"
//                 }
//             }).catch((error)=>{
//                 return{
//                     statusCode:500,
//                     message:"Internal Server error during deletion",
//                     error:error.message
//                 }
                
//             })
//         }else{
//             return{
//                 statusCode:404,
//                 message:"Employee not found"
//             }
//         }
    
// })
// }


const deleteEmployee=(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
        return{
            statusCode:200,
            message:"Employee deleted successfully"
        }
        // if(result.deletedCount>0){
        //     return{
        //         statusCode:200,
        //         message:"Employee deleted Successfully"
        //     }
        // }else{
        //     return{
        //         statusCode:404,
        //         message:"An error occured"
        //     }
        // }
    }).catch((error)=>{
        return{
            statusCode:404,
            message:"Couldn't find employee"
        }
    })

}


const getAnEmployee=(id)=>{
    return db.employee.findOne({id}).then((res)=>{
        if(res){
            return{
                statusCode:200,
                employee:res
            }
        }else{
            return{
                statusCode:404,
                employee:"Error occured"
            }
        }
    })
}


const editEmployee=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((res)=>{
        if(res){
            res.id=id,
            res.name=name,
            res.salary=salary,
            res.designation=designation,
            res.age=age

            res.save()
            return{
                statusCode:200,
                message:'Employee data updated successfully'
            }
        }else{
            return{
                statusCode:404,
                message:"Cant find Employee"
            }
        }
    })
   
          

}

module.exports={
    getAllEmployees,
    addEmployee,
    deleteEmployee,
    getAnEmployee,
    editEmployee
}