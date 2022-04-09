import { Request, Response } from 'express';
import { createUser, deleteUser, getAllUsers, updateUser } from '../../models/users.model';
import { createUserAuth } from '../../models/auth.model'

//! Método POST - Criando um usuário no banco de dados e authentication do Firebase
async function httpCreateUser(request: Request, response: Response){
    const { email, password, knowledges } = request.body;
    //? Se não houver nenhum problema retorna 'true'
    const statusResponse = await createUserAuth(email, password, knowledges);

    //? Retornando status 201 - CREATED ou 400 - BAD REQUEST
    if(statusResponse) return response.status(201).send();
    else return response.status(400).send();
}

//! Método GET - Coletando dados do usuário no banco
async function httpGetAllUsers(request: Request, response: Response){
    const users = await getAllUsers();
    
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
    httpGetAllUsers,
    httpUpdateUser,
    httpDeleteUser,
}