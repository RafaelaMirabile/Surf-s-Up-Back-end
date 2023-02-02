import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { pointRouter } from './routers/point-router/index.js';
import{authRouter} from './routers/auth-router/index.js';
import {reportRouter} from './routers/report-router/index.js'

const server = express();
server.use(express.json());
server.use(cors());

server.use(pointRouter);
server.use(authRouter);
server.use(reportRouter);



server.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
});
