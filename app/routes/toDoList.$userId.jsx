import NewTask from "~/components/newTask";
import { links as newTaskLinks } from "~/components/newTask";
import Tasks , { links as taskLinks } from "~/components/tasks";
import { getTask, store, getUser, storeTask } from "~/data/users";

import { Await, useLoaderData } from '@remix-run/react';
import { redirect } from '@remix-run/node';


export default function TasksDetail() {
  const taskss = useLoaderData();
  if(taskss.stat === "yes"){
    return (
      <main id="maintodo">
        <NewTask />
        <Tasks tasks={taskss}/>
      </main>
    );
  }
  else{
    return(
      <></>
    )
  }
  
    
  }
  export function links() {
    return [...newTaskLinks(), ...taskLinks()];
  }
  export async function action({ request, params }) {
   const uid = params.userId;
   const formData = await request.formData();
    const typeBtn = formData.get('btn');
      const taskData = {
        content: formData.get('content'),
        stat: formData.get('stat')
        
      }
      const existingTask= await getTask(uid);
      let existingUser = await getUser();
      if(typeBtn === "add"){
        
        existingTask.push(taskData);
      
        
      
        await storeTask(uid, existingTask, existingUser);
        return redirect('/toDoList/' + uid);
      }
      else if(typeBtn === "logout"){
        for(let user of existingUser){
          if(user.id === uid){
            user.stat = "no";
            await store(existingUser);
          }
        }
        return redirect('/');
      }
      else{
        existingTask.splice(taskData.content ,1);
        await storeTask(uid, existingTask, existingUser);
        return redirect('/toDoList/' + uid);

      }
      
      
      
  
   
  }
  export async function loader({ params }) {
    
    const uid = params.userId;
    const existingUser = await getUser();
    //const task = await getTask(uid);
    for(const user of existingUser){
      if(user.id === uid){
        const retour = {
          stat: user.stat,
          task: user.tasks
        }
        return retour;
      }
    }
    const retour1 = {
      stat: "no",
      task: []
    }
    
    return retour1;
  }