import { Router } from "express";
import { listReport, postReport } from "../../controllers/report-controller/index.js";
import validateToken from "../../middleware/validateToken.js";


const reportRouter = Router();

reportRouter
.get("/:pointId",listReport)
.post("/:pointId",validateToken,postReport);


export {reportRouter};