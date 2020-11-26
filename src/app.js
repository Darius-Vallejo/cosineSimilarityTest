import Axios from 'axios';
import bodyParser from 'body-parser';
import express from 'express';
require('./db/models');
import UserRouter from './user/UserRouter';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());

const hubSpot = express.Router();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use('/api/client', UserRouter);

app.use('/api/hub', hubSpot);
app.use('/api/hub', hubSpot);

export default app;
