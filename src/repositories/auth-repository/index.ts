import prisma from "../../database/database.js"

async function findEmail(email: string) {
    return await prisma.user.findFirst({
        where: {
            email: email
        }
    });
};

async function findUserName(name: string) {
    return await prisma.user.findFirst({
        where: {
            name: name
        }
    });
}
async function createUser(name: string, email: string, hashedPassword: string) {
    return await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword
        }
    })
}

export const authRepository = {
    findEmail,
    findUserName,
    createUser
}