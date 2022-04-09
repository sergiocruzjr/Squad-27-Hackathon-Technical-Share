import { remove, update } from 'firebase/database';
import { database, set, ref, get, child } from './database/firebase-connection';

async function createUser(userID: string, name: string, knowledges: Array<string>){
    const referencePath = `/users/${userID}/`;
	const userReference = ref(database, referencePath);

    const meetings = {
        0: '',
    };

    await set(userReference, {
        name,
        knowledges,
        meetings,
    });
}

async function getAllUsers(){
    let users: any;

    const referencePath = '/users/';
    const userReference = ref(database, referencePath);
    const snapshot = await get(userReference);

    if (snapshot.exists()) {
        users = snapshot.val();
        console.log(snapshot.val());
        console.log(users);
    } else {
        console.log("No data available");
    }

    return users;
}

async function updateUser(name: string, username: string){
    const referencePath = '/users/'+username+'/';
    const userReference = ref(database, referencePath);

    //TODO: como será tratado os dados que não serão alterados
    await update(userReference, {
        name,
        created_at: new Date(),
    });
}

async function deleteUser(username: string){
    const referencePath = '/users/'+username+'/';
    const userReference = ref(database, referencePath);

    await remove(userReference);
}

export {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
}