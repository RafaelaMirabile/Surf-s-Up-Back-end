import reportRepository, { CreateReportParams } from "../../repositories/report-repository/index.js";

async function getReport(pointId : number) {
    console.log('get4', typeof(pointId));
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

async function findReportFromUser(userId : number, reportId: number){
    const reports = await reportRepository.userReports(userId, reportId);

    if(!reports){
        console.log('o report do usuario nao existe');
        throw Error;
    }
    return reports;
}

async function deleteRequestedReport(userId: number,reportId: number){
const reportFromUser = await findReportFromUser(userId, reportId);
console.log('achou o report certo?',reportFromUser);
const deleteReport = await reportRepository.deleteReportFromDB(reportId);

if(!deleteReport){
    ('passou aqui 1')
    throw Error
}
return deleteReport;
}

const reportService ={
    getReport,
    pointReport,
    deleteRequestedReport
}

export default reportService;