import { Form } from "@remix-run/react/dist";
import newTaskStyle from "./newTask.css";
function NewTask(){
   
        
    return(
        <>
            <Form method="post" id="logout">
                <button name="btn" value="logout" id="btnlogout">Log Out</button>
            </Form>
            <Form method="post"  id="addTask">
                <h1 id="h1new">TO DO LIST</h1>
                <div id="input">
                    <label htmlFor="content"></label>
                    <input type="text" id="content" name="content" placeholder="Add tasks" required></input>
                    <button type="submit" name="btn" value="add">ADD</button>
                    
                </div>
                <div className="stat">
                    <span><input type="radio" name="stat" value="important"/>important</span>
                    <span><input type="radio" name="stat" value="notimportant" />not important</span>
                </div>
            </Form>
        </>
    );
}
export default NewTask;
export function links() {
    return [{ rel: 'stylesheet', href: newTaskStyle }];
}