import fs from 'fs/promises';

export async function getUser(){
    const filePath = 'donnees.json';
    const rawFileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedUsers = data.users ?? [];
    return storedUsers;

}
export function store(users) {
    const filePath = 'donnees.json';
    return fs.writeFile(filePath, JSON.stringify({ users: users || [] }));
}
export async function getTask(idd){
    const filePath = 'donnees.json';
    const rawFileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedUsers = data.users ?? [];
    //const user = storedUsers.find((user) => user.id === idd);
    for(var ser of storedUsers){
      if(ser.id === idd){
        return ser.tasks;
      }
        
    }
    return [];
    

  
}
export async function storeTask(idd, undatingtask, existingUser){
  for(var ser of existingUser){
    if(ser.id === idd){
       ser.tasks = undatingtask;
    }
  }
  const filePath = 'donnees.json';
  return fs.writeFile(filePath, JSON.stringify({ users: existingUser || [] }));
}

