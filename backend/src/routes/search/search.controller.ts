import { Request, Response } from "express";
import { searchUserByName, searchUsersByKnowledges } from '../../models/search.model';

async function httpSearchUserByName(request: Request, response: Response){
    const { name } = request.query;

    const userData = await searchUserByName(name.toString());

    if(userData.length !== 0) return response.status(200).json({ userData });
    else return response.status(400).json({
        error: 'Nome não encontrado'
    })
}

async function httpSearchUsersByKnowledges(request: Request, response: Response){
    const { knowledges } = request.query;
    let knowledgesSearch = [];
    
    if(knowledges. length > 0){
        for(let i=0; i < knowledges.length; i++){
            knowledgesSearch.push(knowledges[i]);
        }     
    }

    const usersData = await searchUsersByKnowledges(knowledgesSearch);

    if(usersData.length !== 0) return response.status(200).json({ usersData });
    else return response.status(400).json({
        error: 'Nome não encontrado'
    })
}

export {
    httpSearchUserByName,
    httpSearchUsersByKnowledges,
}