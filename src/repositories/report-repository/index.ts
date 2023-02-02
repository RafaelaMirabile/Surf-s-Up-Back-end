import prisma from "../../database/database.js";

async function findReports(pointId: number) {
    return await prisma.reports.findMany({
        where: {
            id: pointId
        }
    });
}

const reportRepository ={
    findReports
}

export default reportRepository;