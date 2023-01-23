import { prisma } from "@/database/database";

async function findPoints() {
    return prisma.point.findMany();
}

const pointRepository ={
    findPoints
};

export default pointRepository;
