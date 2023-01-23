
import { Router } from 'express'
import { listPoints } from '../../controllers/point-controller';

const pointRouter = Router();
pointRouter
    .get("/", listPoints);

export { pointRouter };