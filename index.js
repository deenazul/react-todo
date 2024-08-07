
import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';
import ToDoModel from './src/todo.js';

const app = express();
const DATABASE_URI = process.env.DATABASE_URI;
mongoose.connect(DATABASE_URI)
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(cors("*"))

app.get('/get', (req, res) => {
    ToDoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    ToDoModel.findByIdAndUpdate({_id:id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    ToDoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post("/add", (req, res) => {
    const task = req.body.task;
    ToDoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})