import prisma from "../../database/database.js";

async function findReports(pointId: number) {
return await prisma.reports.findMany({
    where :{
        picoId: pointId
    }
})
}

async function createReport(userId : number, pointId: number ,reportBody: CreateReportParams) {
return await prisma.reports.create({
    data: {
        userId: userId,
        picoId: pointId,
        username_: reportBody.user_name,
        report: reportBody.report,
        stokedlevel_: reportBody.stoked_level
    }
})
}

async function userReports(user_Id: number, reportId: number) {
    return await prisma.reports.findFirst({
        where:{
            id: reportId,
            userId : user_Id
        }
    });
}

async function deleteReportFromDB(reportId : number){
    return await prisma.reports.delete({
        where:{
            id: reportId
        }
    })
}

type Report = {
    id: number,
    userId: number,
    user_name: string,
    picoId: number,
    report: string,
    stoked_level: string,
    createAt: number
}

export type CreateReportParams = Omit< Report, "createdAt" | "id">

const reportRepository = {
    findReports,
    createReport,
    deleteReportFromDB,
    userReports
}

export default reportRepository;