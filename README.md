# Student API Project

This is a simple backend project developed using Node.js, Express.js, and MongoDB.  
The project performs basic CRUD operations for student data.

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- VS Code
- Git & GitHub

---

# Database Used

MongoDB Local Database

Connection URL:

mongodb://127.0.0.1:27017/studentDB

---

# APIs Created

## 1. Add Student API

Method: POST

Endpoint:

http://localhost:3000/addStudent

Description:

This API adds a new student into the MongoDB database.

Example Request Body:

{
  "name": "Nandu"
}

Example Output:

Student Added Successfully

---

## 2. Get Students API

Method: GET

Endpoint:

http://localhost:3000/students

Description:

This API fetches all student records from MongoDB database.

Example Output:

[
  {
    "_id": "682b7192db48d52dddfd0ae",
    "name": "Nandu",
    "__v": 0
  }
]

---

## 3. Update Student API

Method: PUT

Endpoint:

http://localhost:3000/updateStudent/:id

Description:

This API updates existing student data using MongoDB Object ID.

Example Request Body:

{
  "name": "Raritone"
}

Example Output:

Student Updated Successfully

---

# Project Output

- MongoDB Connected
- Server Started
- Student Added Successfully
- Student Data Retrieved Successfully
- Student Updated Successfully

---

# Tools Used

- Postman
- Command Prompt
- MongoDB
- VS Code

---

# Author

Nandini Bhimineni
