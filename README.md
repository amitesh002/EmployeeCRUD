# Employee CRUD REST API

A simple REST API project built using **Node.js, Express.js, MongoDB and Mongoose**.

This project performs basic CRUD operations on employee data.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- HTML
- Fetch API

## Employee Fields

Each employee contains:

```text
id
name
gender
email
salary
```

## Project Structure

```text
RESTprj/
│
├── server.js
├── .env
├── index.html
├── package.json
│
└── src/
    ├── app.js
    │
    ├── db/
    │   └── db.js
    │
    ├── controller/
    │   └── employee.crud.js
    │
    └── model/
        └── employee.model.js
```

## Setup

Install the required packages:

```bash
npm install
```

Create a `.env` file in the project root:

```env
MONGO_DB=your_mongodb_connection_string
```

## Run the Server

```bash
node server.js
```

Or use nodemon:

```bash
npx nodemon server.js
```

The server runs on:

```text
http://localhost:3000
```

## API Endpoints

| Method | URL | Purpose |
|---|---|---|
| GET | `/` | Get all employees |
| GET | `/:id` | Get employee by ID |
| POST | `/` | Create employee |
| PUT | `/:id` | Update employee |
| DELETE | `/:id` | Delete employee |

## POST - Create Employee

URL:

```text
POST http://localhost:3000/
```

Example JSON:

```json
{
    "id": 101,
    "name": "Amit",
    "gender": "Male",
    "email": "amit@gmail.com",
    "salary": 50000
}
```

## GET - All Employees

```text
GET http://localhost:3000/
```

## GET - One Employee

For employee ID `101`:

```text
GET http://localhost:3000/101
```

## PUT - Update Employee

For employee ID `101`:

```text
PUT http://localhost:3000/101
```

Example JSON:

```json
{
    "name": "Amitesh",
    "gender": "Male",
    "email": "amitesh@gmail.com",
    "salary": 60000
}
```

## DELETE - Delete Employee

For employee ID `101`:

```text
DELETE http://localhost:3000/101
```

## Frontend

A simple `index.html` is included to test the APIs using JavaScript `fetch()`.

The frontend sends requests to:

```text
http://localhost:3000
```

## CRUD Flow

```text
Frontend
   ↓
Fetch API
   ↓
Express.js
   ↓
Controller
   ↓
Mongoose Model
   ↓
MongoDB
   ↓
Response
   ↓
Frontend
```

## Learning Purpose

This project was created to understand:

- REST API
- Client-server architecture
- HTTP methods
- CRUD operations
- Express.js routes
- Controllers
- Mongoose
- MongoDB
- Fetch API
- JSON
- Connecting frontend with backend
