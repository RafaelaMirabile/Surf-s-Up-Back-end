import { listPoints } from '@/controllers/point-controller';
import { Router } from 'express';
var pointRouter = Router();
pointRouter
    .get("/", listPoints);
export { pointRouter };
