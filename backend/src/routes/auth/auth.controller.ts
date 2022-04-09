import { Request, Response } from "express";
import { signInUserAuth, signOutUserAuth } from "../../models/auth.model";

async function httpSignInUser(request: Request, response: Response){
    const { email, password } = request.body
    const statusResponse = await signInUserAuth(email, password);

    //? Retornando status 200 - SUCCESS ou 400 - BAD REQUEST
    if(statusResponse) {
        //TODO: Enviar para o dashboard
        // Ir para dashboard
        return response.status(201).send();
    } else return response.status(400).send();
}

async function httpSignOutUser(request: Request, response: Response){
    const statusResponse = await signOutUserAuth();

    //? Retornando status 200 - SUCCESS ou 400 - BAD REQUEST
    if(statusResponse){
        //TODO: Enviar para a página de login
        // Ir para página de login
        return response.status(201).send();
    }
    else return response.status(400).send();
}

export {
    httpSignInUser,
    httpSignOutUser,
}