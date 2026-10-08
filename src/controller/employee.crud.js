const employeeModel = require("../models/employee.model");


async function createEmployee(req,res){
    try {
        const {name,gender,email,salary} = req.body;
        const result = await employeeModel.create({
            name,gender,email,salary
        })
        res.status(201).json({
            message : "employee is created"
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

async function getAllEmployee(req,res){
    try {
        const result = await employeeModel.find();
        res.status(200).json({
            message : "all employee data",
            data : result
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

async function getEmployeeById(req,res){
    try {
        const {id} = req.params;
        const result = await employeeModel.findById(id);
        res.status(200).json({
            message : "employee data",
            data : result
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

async function updateEmployee(req,res){
    try{
        const {id} = req.params;
        const {name,gender,email,salary} = req.body;
        const result = await employeeModel.findOneAndUpdate({ _id: id }, { name, gender, email, salary }, { new: true });

        if (!result) {
            return res.status(404).json({
                message : "employee not found"
            });
        }

        res.status(200).json({
            message : "employee updated",
            data : result
        });
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }

}

async function deleteEmployee(req,res){
    try{
        const {id} = req.params;
        const result = await employeeModel.findOneAndDelete({ _id: id });

        if (!result) {
            return res.status(404).json({
                message : "employee not found"
            });
        }
        res.status(200).json({
            message : "employee deleted",
            data : result
        }); 
    } catch (error) {
        res.status(500).json({
            message : error.message
        })  
    }
}

module.exports = {
    createEmployee,
    getAllEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}