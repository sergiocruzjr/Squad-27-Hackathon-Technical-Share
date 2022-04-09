import { database, set, ref, get, child } from './database/firebase-connection';

async function searchUserByName(name: string): Promise<string>{
    const databaseRef = ref(database);
    let userInformationsArray = new Array();
    
    await get(child(databaseRef, 'users'))
        .then(snapshot => {
            //? Coletando o objeto que contém os dados dos usuários
            const userIDsObject = snapshot.val();
            //? Transformando o objeto em array
            const userIDsArray = Object.entries(userIDsObject);
            //? Pegando apenas os dados de cada usuário
            userIDsArray.forEach(user => userInformationsArray.push(user[1]));
        });
    
    const userFound = userInformationsArray.find(user => user.name === name);

    if(userFound !== undefined) return userFound;
    else return '';
}

export {
    searchUserByName,
}