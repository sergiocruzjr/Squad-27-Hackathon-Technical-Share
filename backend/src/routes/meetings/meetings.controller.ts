//! Importar 'Request' e 'Response'
import { Request, Response } from "express";
//! Importar model de 'meetings'
import { createNewMeeting, deleteMeeting } from '../../models/meetings.model';

//? Método POST - criando nova reunião
async function httpCreateNewMeeting(request: Request, response: Response){
    const { guestName, subject, date } = request.body;
    const { userId } = request.params;

    //* Criando nova reunião
        //TODO Fazer alguma forma de retornar algum tipo de sucesso/erro
    await createNewMeeting(userId, guestName, subject, date);

    //* Retornar response ao usuário
}

//? Método PATCH - "deletando reunião" trocando a variável 'upcoming' para false
async function httpDeleteMeeting(request: Request, response: Response){
    const { id } = request.params;

    //* Deletando a reunião
        //TODO Fazer alguma forma de retornar algum tipo de sucesso/erro
    await deleteMeeting(id);

    //* Retornar response ao usuário
}

export {
    httpCreateNewMeeting,
    httpDeleteMeeting,
}