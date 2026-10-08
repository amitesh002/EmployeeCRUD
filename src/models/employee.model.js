const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    gender:{
        type: String ,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    email:{
        type : String,
        required:true
    },
    salary:{
        type : Number,
        required : true
    }
})

const employeeModel = mongoose.model("employee",employeeSchema)

module.exports = employeeModel;