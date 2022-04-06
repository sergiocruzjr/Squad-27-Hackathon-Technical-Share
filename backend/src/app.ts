//! Importando express
import express from 'express';
//! Importando routers da API
import api from './routes/api';
//! Definindo app
const app = express();

//? Análise dos JSONs vindos
app.use(express.json());

//? Routers
app.use('/', api);

//! Exportando app.ts
export = app;