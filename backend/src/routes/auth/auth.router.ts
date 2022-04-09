//! Importando o express
import express from 'express';
//! Importando o controller
import { httpSignInUser, httpSignOutUser } from './auth.controller'

//! Definindo o router de auth
const authRouter = express.Router();

//? Método POST - Login de usuário
    authRouter.post('/login', httpSignInUser);
//? Método GET - Logout de usuário
    authRouter.get('/logout', httpSignOutUser);

//! Exportando router
export = authRouter;

