import { useDispatch, useSelector } from "react-redux";
import { statusButtonPressed } from "./tasksSlice";

const Tasks = () => {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => {
        console.log(state.tasks)
        return state.tasks
    })
    return (
        <>
          <div>
            <h1>My Task List</h1>
            <ol>
                {
                    tasks.tasks.map(task => (
                        <li key={task.taskId}>
                            <h2>{task.taskDate}</h2>
                            
                               <ul>
                                  {task.taskList.map(taskk => (
                                    <li key={taskk.taskId}>
                                        <p>{taskk.task}</p>
                                        <p>Status: <button onClick={() => dispatch(statusButtonPressed(taskk.taskId))}>{taskk.status}</button> </p>
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