import { useSelector } from "react-redux";

const Tasks = () => {
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
                                        <p>Status: {taskk.status} </p>
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