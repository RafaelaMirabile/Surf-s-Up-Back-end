import 'dotenv/config';
import express, {Express} from 'express';
import cors from 'cors';
import { connectDb, disconnectDB } from './database/database.js';
import { pointRouter } from './routers/point-router/index.js';

const server = express();
server.use(express.json());
server.use(cors());

server.use(pointRouter);

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(server);
  }
  
  export async function close(): Promise<void> {
    await disconnectDB();
  }


server.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
});
