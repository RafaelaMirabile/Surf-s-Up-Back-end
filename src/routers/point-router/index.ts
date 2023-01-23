
import { listPoints } from '@/controllers/point-controller';
import { Router } from 'express'

const pointRouter = Router();

pointRouter
    .get("/",listPoints);

export { pointRouter };