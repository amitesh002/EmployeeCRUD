/*Assignment:
crud using JavaScript & ( Postman || fetch ):  id, name, gender , email, salary, create collection of employee
Todays class example

Client-Server Architecture get,post,put,delete */

const express = require("express");
const cors = require("cors");
const employeeRouter = require("./controller/employee.crud");
    

const app = express();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, 
    methods: "GET, PUT, DELETE, POST"
}

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", employeeRouter.getAllEmployee);
app.get("/:id", employeeRouter.getEmployeeById);
app.post("/", employeeRouter.createEmployee);
app.put("/:id", employeeRouter.updateEmployee);
app.delete("/:id", employeeRouter.deleteEmployee);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found"
    });
});

module.exports = app;
