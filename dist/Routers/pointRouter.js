import { Router } from 'express';
var pointRouter = Router();
pointRouter
    .get(getPoints);
export { pointRouter };
