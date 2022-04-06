import { Request, Response } from 'express';
import { createUser, deleteUser, getUsers, updateUser } from '../../models/users.model';

//! Método POST - Criando um usuário no banco do Firebase
async function httpCreateUser(request: Request, response: Response){
    const { name, username } = request.body;

    await createUser(name, username);

    return response.status(200).send();
}

//! Método GET - Coletando dados do usuário no banco
async function httpGetUser(request: Request, response: Response){
    const users = await getUsers();
    
    return response.status(200).json(users);
}

//! Método PUT - Update dos dados do usuário
    //TODO Posso trocar para PATCH?
async function httpUpdateUser(request: Request, response: Response){
    const { name, username } = request.body;

    await updateUser(name, username);

    return response.status(200).send();
}

//! Método DELETE - Deletando dados do usuário
async function httpDeleteUser(request: Request, response: Response){
    const { username } = request.params;
    console.log(username);

    await deleteUser(username);

    return response.status(200).send();
}

export {
    httpCreateUser,
    httpGetUser,
    httpUpdateUser,
    httpDeleteUser,
}