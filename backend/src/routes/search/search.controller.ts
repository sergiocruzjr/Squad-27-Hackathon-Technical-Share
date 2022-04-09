import { Request, Response } from "express";
import { searchUserByName } from '../../models/search.model';

async function httpSearchUserByName(request: Request, response: Response){
    const { name } = request.body;

    const userData = await searchUserByName(name);

    if(userData !== '') return response.status(200).json({ userData });
    else return response.status(400).json({
        error: 'Nome não encontrado'
    })
}

export {
    httpSearchUserByName,
}