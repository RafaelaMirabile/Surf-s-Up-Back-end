import { authRepository } from "../../repositories/auth-repository/index.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

async function createUser({ name, email, password }) {
    await validateUniqueEmailAndUserName(name, email);

    const hashedPassword = await bcrypt.hash(password, 12);
    return authRepository.createUser(name, email, hashedPassword);
}

async function validateUniqueEmailAndUserName(name: string, email: string) {
    const userWithSameEmail = await authRepository.findEmail(email);
    if (userWithSameEmail) {
        console.log('auth-service: msm email');
        throw Error;
    }
    const userWithSameUserName = await authRepository.findUserName(name);
    if (userWithSameUserName) {
        console.log('auth-service: msm userName');
        throw Error;
    }
};

async function findUser(userName: string, password: string) {
    const user = await authRepository.findUserName(userName);

    if (!user) {
        console.log('auth-service: nao achou o usuario');
        throw Error;
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        console.log('auth-service: senha invlida');
        throw Error;
    }
    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {});
    const userRegister = { id: user.id, user: user.name, token: token }
    return userRegister;
}


export const authService = {
    createUser,
    findUser

}