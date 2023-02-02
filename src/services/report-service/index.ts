import reportRepository from "../../repositories/report-repository/index.js";

async function getReport(pointId : number) {
    const reports = await reportRepository.findReports(pointId);
    
    if(!reports){
        throw Error;
    }
    return reports;
}

const reportService ={
    getReport
}

export default reportService;