//! Importando o express
import express from 'express';
//! Importando o controller
import { httpSearchUserByName, httpSearchUsersByKnowledges } from './search.controller';

//! Definindo o router de pesquisas
const searchRouter = express.Router();

//? Método GET - Busca por usuário
    searchRouter.get('/name', httpSearchUserByName);
//? Método GET - Busca por conhecimentos
    searchRouter.get('/knowledges', httpSearchUsersByKnowledges);

//! Exportando router
export = searchRouter;