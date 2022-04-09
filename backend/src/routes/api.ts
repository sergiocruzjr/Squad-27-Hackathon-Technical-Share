//! Importando o express
import express from 'express';

//! Definindo os routers
    //? Router dos usuários
import usersRouter from './users/users.router';
    //? Router de auth
import authRouter from './auth/auth.router';

//! Definindo router da API
const api = express.Router();

//? Gerenciamento dos routers
    //* Usuários
api.use('/users', usersRouter);
    //* Auth
api.use('/auth', authRouter);

//! Exportando api
export = api;