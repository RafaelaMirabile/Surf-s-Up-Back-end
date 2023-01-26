import { authRepository } from "../../repositories/auth-repository/index.js";
import bcrypt from 'bcrypt'
async function createUser({name,email,password}){
    await validateUniqueEmailAndUserName(name,email);

    const hashedPassword = await bcrypt.hash(password,12);
    return authRepository.createUser(name,email,hashedPassword);
}

async function validateUniqueEmailAndUserName(name: string, email: string){
const userWithSameEmail = await authRepository.findEmail(email);
if(userWithSameEmail){
    console.log('auth-service: msm email');
    throw Error;
}
const userWithSameUserName = await authRepository.findUserName(name);
if(userWithSameUserName){
    console.log('auth-service: msm userName');
    throw Error;
}
};

 export const authService = {
    createUser
}