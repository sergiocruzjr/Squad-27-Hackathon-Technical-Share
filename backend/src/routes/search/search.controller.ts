import { Request, Response } from "express";
import { searchUserByName } from '../../models/search.model';

async function httpSearchUserByName(request: Request, response: Response){
    const { name } = request.body;

    const responseName = await searchUserByName(name);

    if(responseName !== '') return response.status(200).json({ name: responseName });
    else return response.status(400).json({
        error: 'Nome não encontrado'
    })
}

export {
    httpSearchUserByName,
}