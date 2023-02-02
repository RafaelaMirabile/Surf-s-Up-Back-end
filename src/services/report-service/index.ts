import reportRepository, { CreateReportParams } from "../../repositories/report-repository/index.js";

async function getReport(pointId : number) {
    const reports = await reportRepository.findReports(pointId);
    
    if(!reports){
        throw Error;
    }
    return reports;
}

async function pointReport(userId : number, pointId: number ,reportBody: CreateReportParams) {
    const report = await reportRepository.createReport(userId,pointId,reportBody);
    
    if(!report){
        throw Error;
    }
    return report;
}

const reportService ={
    getReport,
    pointReport
}

export default reportService;