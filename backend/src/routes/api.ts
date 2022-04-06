//! Importando o express
import express from 'express';

//! Definindo os routers
    //? Router dos usuários
import usersRouter from './users/users.router';

//! Definindo router da API
const api = express.Router();

//? Gerenciamento dos routers
    //* Usuários
api.use('/users', usersRouter);

//! Exportando api
export = api;