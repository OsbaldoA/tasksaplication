import { createContext, useState, useEffect } from "react"
import {tasks as data} from '../data/Task.js'

export const TaskContext = createContext()

export function TaskContextProvider(props){

    const [tasks, setTask] = useState([]);
    useEffect(() => {setTask(data);}, []);

    function createTask(task){
        setTask([...tasks, {
          title: task.title,
          id: tasks.length+1,
          description: task.description,
        }])
      }

      function deleteTask(taskId){
        setTask(tasks.filter(task => task.id !== taskId))
      }


    return(
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    ); 
}

export default TaskContext