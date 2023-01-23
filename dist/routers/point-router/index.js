import { Router } from 'express';
import { listPoints } from '../../controllers/point-controller';
var pointRouter = Router();
pointRouter
    .get("/", listPoints);
export { pointRouter };
