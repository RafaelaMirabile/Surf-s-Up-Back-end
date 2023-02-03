import { Router } from "express";
import { deleteReport, listReport, postReport } from "../../controllers/report-controller/index.js";
import validateToken from "../../middleware/validateToken.js";


const reportRouter = Router();

reportRouter
.get("/:pointId",listReport)
.post("/:pointId",validateToken,postReport)
.delete("/:reportId",validateToken,deleteReport)


export {reportRouter};