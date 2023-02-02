import prisma from "../../database/database.js";

async function findPoints() {
    return await prisma.point.findMany();
}

const pointRepository = {
    findPoints,
};

export default pointRepository;
