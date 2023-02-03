import { Request, Response } from "express";
import reportService from "../../services/report-service/index.js";

export async function listReport(req: Request, res: Response) {
    const { pointId } = req.params;
    try {
        const reports = await reportService.getReport(Number(pointId));
        return res.status(200).send(reports.map(value => value));
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function postReport(req: Request, res: Response) {
    const reportBody = req.body;
    const { pointId } = req.params;
    const { user } = res.locals;

    try {
        const report = await reportService.pointReport(user.id, Number(pointId), reportBody);
        return res.status(200).send(report);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function deleteReport(req: Request, res: Response) {
    const { reportId } = req.params;
    const { user } = res.locals;

    try {
        await reportService.deleteRequestedReport(user.id, Number(reportId));
        return res.sendStatus(202);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}