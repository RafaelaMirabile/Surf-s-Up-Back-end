
import { Router } from 'express'
import { listPoints, listReport,  } from '../../controllers/point-controller/index.js';

const pointRouter = Router();
pointRouter
    .get("/", listPoints)
    .get("/:pointId",listReport);

export { pointRouter };