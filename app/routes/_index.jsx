import { links as newTaskLinks } from "~/components/newTask";
import Signn , { links as signLinks } from "~/components/sign";
import { getUser, store } from "~/data/users";
import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';



export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const users = useLoaderData();
  return (
    <main id="index">
      <Signn />
    </main>
  );
}


export async function loader() {
  const user = await getUser();
  return user;
}
export async function action({ request }) {
  const formData = await request.formData();
  const typeBtn = formData.get('button');
    const userData = {
      id: formData.get('iduser'),
      password: formData.get('password'),
      stat: "no",
      tasks: []
    }
  if(typeBtn === 'up'){
    
    const existingUser = await getUser();
    //const updatedUser = existingUser.concat(userData);
    let test = false;
    for(const user of existingUser){
      if(user.id === userData.id){
        test = true;
        break;
      }
    }
    if(test === false){
      existingUser.push(userData);
      await store(existingUser);
    }
    
    
    return redirect('/');
  }
  //sign in
  else{
    const userId = userData.id;
    const userPassword = userData.password;
    let existingUser = await getUser();
    /*const userExists = existingUser.some(user => (user.id === userId) && (user.password === userPassword));
    //user exist
    if(userExists){
      for(const us of existingUser){
        if(us.id === userId){
          us.password = "yes";
        }
      }
      return redirect('/toDoList/' + userId);
    }
    //user does not exist
    else{
      return redirect('/');
    }*/

    for(let user of existingUser){
      if((user.id === userId) && (user.password === userPassword)){
        //user exist
        user.stat = "yes";
        await store(existingUser);
        return redirect('/toDoList/' + userId);
      }
    }
    return redirect('/');
  }

 
}

export function links() {
  return [...newTaskLinks(), ...signLinks()];
}
