//! Importando o express
import express from 'express';

//! Importando o controller
import { httpGetUser, httpUpdateUser, httpCreateUser, httpDeleteUser } from './users.controller';

//! Definindo o router dos usuários
const usersRouter = express.Router();

//? Método GET
    usersRouter.get('/', httpGetUser);
//? Método POST
    usersRouter.post('/', httpCreateUser);
//? Método PUT
    usersRouter.put('/', httpUpdateUser);
//? Método DELETE
    usersRouter.delete('/:username', httpDeleteUser);

//! Exportando o router dos usuários
export = usersRouter;

