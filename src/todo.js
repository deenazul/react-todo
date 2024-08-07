import { Schema, model } from 'mongoose'

const ToDoSchema = new Schema({
    task: String,
    done: {
        type: Boolean,
        default: false,
    }
})

const ToDoModel = model("todos", ToDoSchema)
export default ToDoModel 