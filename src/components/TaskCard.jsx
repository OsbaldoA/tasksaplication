import { useContext } from "react";
import {TaskContext} from '../context/TaskContext.jsx'

function TaskCard({task}){

    const {deleteTask} = useContext(TaskContext)

/*     function showAlert(){
        alert('Tarea ' + task.id + ' eliminada')
        
    } */

    return(

            <div className="bg-gray-800 text-white p-4 rounded-md">
                <h1 className="text-xl capitalize">{task.title}</h1>
                <p className="text-gray-500 text-sm">{task.description}</p>
                <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>
                Eliminar Tarjeta
                </button>
        </div>

    );

}

export default TaskCard;
