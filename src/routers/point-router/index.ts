
import { Router } from 'express'
import { listPoints} from '../../controllers/point-controller/index.js';

const pointRouter = Router();
pointRouter
    .get("/", listPoints)

export { pointRouter };