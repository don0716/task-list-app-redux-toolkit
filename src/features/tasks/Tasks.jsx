import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, statusButtonPressed } from "./tasksSlice";
import { useEffect } from "react";

const Tasks = () => {
    const dispatch = useDispatch()

    const tasks = useSelector((state) => {
        console.log(state.tasks)
        return state.tasks
    })
    console.log("Tasks:: " ,tasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])


    return (
        <>
          <div>
            <h1>My Task List</h1>
            <ol>
                {
                    tasks.tasks.map((task, index) => (
                        <li key={index}>
                            <h2>{task.date}</h2>
                            
                               <ul>
                                  {task.tasks.map(task => (
                                    <li key={task.taskId}>
                                        <p>{task.task}</p>
                                        <p>Status: <button onClick={() => dispatch(statusButtonPressed(task.taskId))}>{task.taskStatus}</button> </p>
                                    </li>
                                ))}
                               </ul>
                            
                        </li>
                    ))

                }
            </ol>
          </div>
        </>
    )
}

export default Tasks