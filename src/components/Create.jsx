import { useState } from "react"
import axios from "axios";

const Create = () => {
    const [task, setTask] = useState({
        title: "",
        id: "",
        done: "todo",
    });
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task:task})
            .then(result => {
                location.reload()  
            })
            .catch(error => console.log(error))
        
    }

    return (
        <>
        <div className="flex mt-10 justify-center ">
        <div className="createForm relative w-1/2 gap-4 mb-5">
            <input type="text" className="relative h-12 drop-shadow-md bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Add new task" onChange={(e) => {setTask(e.target.value)}}/> 
            <button type="button" className="absolute top-0 end-0 h-full text-sm bg-blue-400 border rounded font-bold text-white" onClick={handleAdd}>+ New Task</button>
           
        </div>
        </div>
        </>
    )
}

export default Create