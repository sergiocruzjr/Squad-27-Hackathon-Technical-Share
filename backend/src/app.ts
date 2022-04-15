//! Importando express
import express from 'express';
import swaggerUi from 'swagger-ui-express';
//! Importando routers da API
import api from './routes/api';
import cors from 'cors';
import swaggerFile from './swagger.json';
//! Definindo app
const app = express();

//? Análise dos JSONs vindos
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

//? Routers
app.use('/', api);

//! Exportando app.ts
export = app;