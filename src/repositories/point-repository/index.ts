import prisma from "../../database/database.js";



async function findPoints() {
    return await prisma.point.findMany();
}

async function findReports(pointId: number) {
    return await prisma.reports.findMany({
        where: {
            id: pointId
        }
    });
}

const pointRepository = {
    findPoints,
    findReports
};

export default pointRepository;
