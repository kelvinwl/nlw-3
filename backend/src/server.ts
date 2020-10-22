import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

/*

  Rota - conjunto
  Recurso - usuário

  Métodos HTTP = GET, POST, PUT, DELETE
  Parâmetros

  GET = Buscar uma informação
  POST = Criar uma informação
  PUT = Editar uma informação
  DELETE = Deletar uma informação

  Query params: http://localhost:3333/users?search=kelvin
  Route params: http://localhost:3333/users/1
  Body: http://localhost:3333/users
  
  console.log(request.query);
  console.log(request.params);
  console.log(request.body);

*/



app.listen(3333);
