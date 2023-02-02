import prisma from "../../database/database.js";

async function findReports(pointId: number) {
    return await prisma.reports.findMany({
        where: {
            id: pointId
        }
    });
}

async function createReport(userId : number, pointId: number ,reportBody: CreateReportParams) {
return await prisma.reports.create({
    data: {
        userId: userId,
        picoId: pointId,
        userName: reportBody.user_name,
        report: reportBody.report,
        stokedLevel: reportBody.stoked_level
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
    createReport
}

export default reportRepository;