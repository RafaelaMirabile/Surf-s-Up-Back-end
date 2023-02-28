import { Router } from "express";
import { deleteReport, listReport, postReport } from "../../controllers/report-controller/index.js";
import validateToken from "../../middleware/validateToken.js";


const reportRouter = Router();

reportRouter
.get("/reports/:pointId",listReport)
.post("/reports/:pointId",validateToken,postReport)
.delete("/reports/:reportId",validateToken,deleteReport)

export {reportRouter};