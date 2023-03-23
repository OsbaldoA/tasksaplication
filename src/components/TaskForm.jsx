import { useState, useContext } from "react";
import {TaskContext} from "../context/TaskContext";


function TaskForm(){

    const [title, setTitle] = useState("")
    const [description, setdescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({title, description})
        setTitle('')
        setdescription('')
    }
    

    return(
        <div className="max-w-md mx-auto ">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
            <input 
                placeholder="Excribe tu tarea" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
                autoFocus
                className="bg-slate-500 p-3 w-full mb-3"
            />
            
            <textarea 
                placeholder="Escribe un texto" 
                onChange={(e) => setdescription(e.target.value)} 
                value={description}
                className="bg-slate-500 p-3 w-full mb-3">
                
            </textarea>   
   
            <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
        </form>
        </div>
    );
}

export default TaskForm