import { remove, update } from 'firebase/database';
import { database, set, ref, get, child } from '../../models/database/firebase-connection';

//! Método POST - Criando um usuário no banco do Firebase
async function httpCreateUser(request, response){
    const { name, username } = request.body;

    const referencePath = '/users/'+username+'/';
	const userReference = ref(database, referencePath);

    await update(userReference, {
        name,
        created_at: new Date(),
    });

    return response.status(200).send();
}

//! Método GET - Coletando dados do usuário no banco
async function httpGetUser(request, response){
    let users;

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
    
    return response.status(200).json(users);
}

//! Método PUT - Update dos dados do usuário
    //TODO Posso trocar para PATCH?
async function httpUpdateUser(request, response){
    const { name, username } = request.body;

    const referencePath = '/users/'+username+'/';
    const userReference = ref(database, referencePath);

    //TODO: como será tratado os dados que não serão alterados
    await set(userReference, {
        name,
        created_at: new Date(),
    });

    return response.status(200).send();
}

//! Método DELETE - Deletando dados do usuário
async function httpDeleteUser(request, response){
    const { username } = request.params;
    console.log(username);

    const referencePath = '/users/'+username+'/';
    const userReference = ref(database, referencePath);

    await remove(userReference);

    return response.status(200).send();
}

export {
    httpCreateUser,
    httpGetUser,
    httpUpdateUser,
    httpDeleteUser,
}