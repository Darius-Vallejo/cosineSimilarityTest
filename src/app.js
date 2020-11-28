import Axios from 'axios';
import bodyParser from 'body-parser';
import express from 'express';
require('./db/models');
import UserRouter from './user/UserRouter';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.static(__dirname + '/public'));
app.use('/api/client', UserRouter);

export default app;
