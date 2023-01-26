import { Request, Response } from "express";
import { authService } from "../../services/auth-service/index.js";

export async function registerUser(req: Request, res: Response){
const {name,email,password} = req.body;
try {
    const user = await authService.createUser({name,email,password});
    return res.status(200).json({
        id: user.id,
        name: user.name
    });
} catch (error) {
    console.log(error);
    return res.sendStatus(500);
}
}