//! Importando o express
import express from 'express';
//! Importando o controller
import { httpSearchUserByName } from './search.controller';

//! Definindo o router de pesquisas
const searchRouter = express.Router();

//? Método GET
    searchRouter.get('/name', httpSearchUserByName);

//! Exportando router
export = searchRouter;