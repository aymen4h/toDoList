import taskStyle from "./tasks.css";
import { Form } from "@remix-run/react/dist";


function Tasks({tasks}){
    const tas = tasks.task;
    return(
        <>
            <div className="tasks">
                <ul>
                {
                    tas.map((task, index) => (
                    <Form method="post" id="formtasks">
                        <li key={index}>

                            <span> {task.content}</span>
                            <input type="hidden" name="title" value={task.content} />
                            <input type="hidden" name="content" value={index} />
                            <button name="btn" value="delete">delete</button>
                        </li>
                    </Form>
                     ))
                }
                </ul>
            </div>
        </>
    )
}
export default Tasks;
export function links() {
    return [{ rel: 'stylesheet', href: taskStyle }];
}