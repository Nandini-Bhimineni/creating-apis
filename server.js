const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const studentSchema = new mongoose.Schema({
    name: String
});

const Student = mongoose.model("Student", studentSchema);

app.post("/addStudent", async (req, res) => {

    const student = new Student({
        name: req.body.name
    });

    await student.save();

    res.send("Student Added Successfully");

});

app.get("/students", async (req, res) => {

    const students = await Student.find();

    res.json(students);

});
app.put("/updateStudent/:id", async (req, res) => {

    await Student.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name
        }
    );

    res.send("Student Updated Successfully");

});
app.listen(3000, () => {
    console.log("Server Started");
});
