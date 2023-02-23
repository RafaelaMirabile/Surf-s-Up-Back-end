import { Router } from 'express'
import { listPoints} from '../../controllers/point-controller/index.js';
import validateToken from '../../middleware/validateToken.js';

const pointRouter = Router();
pointRouter
    .get("/", listPoints)
    .post("/:pointId", validateToken)

export { pointRouter };