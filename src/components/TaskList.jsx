import { useEffect, useState } from "react"
import axios from "axios"
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs"


function TaskList() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])
    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        <div className="w-1/3 shadow-lg border-solid border border-slate-700 rounded-sm ">
            <div className="titleHeader  bg-[#f5537e] flex flex-col ">
                {/* card header */}
                <div className="font-regular bg-[#f5537e] border-solid border-b border-slate-700 text-white h-12 pt-3">
                    Time to Work Hard!
                </div>

                <div className="column border  bg-slate-200  divide-y divide-gray-400" >
                {
                    todos.length === 0
                    ? //then
                    <div className="list  border rounded-b-md p-1 ">
                        <h3 className="mb-3 text-slate-800 pt-2 ">No list has been created</h3>
                    </div>
                    :
                    todos.map(todo => (
                        
                        <div className="task text-slate-800 font-light bg-slate-200 mx-2" key={todo._id}>
                            {/* draggable */}
                            <div className="checkbox " key={todo._id} onClick={() => handleEdit(todo._id)}>
                                {todo.done ? 
                                <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
                                : <BsCircleFill className="icon"/>
                            }
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p> 
                            </div>
                            <div>
                                <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)}/></span>
                            </div>
                        </div>
                    ))
                }

                
            
            
                </div>
            </div>
        </div>
        </>
    )
}
export default TaskList