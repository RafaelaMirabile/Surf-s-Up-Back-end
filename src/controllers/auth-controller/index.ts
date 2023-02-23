import { Request, Response } from "express";
import { authService } from "../../services/auth-service/index.js";

export async function registerUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
        const user = await authService.createUser({ name, email, password });
        return res.status(200).json({
            id: user.id,
            name: user.name
        });
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export async function login (req: Request, res: Response) {
    const { name, password } = req.body;

    try {
        console.log('body', req.body);
        const user = await authService.findUser(name, password);
        console.log(user);
        return res.status(200).send(user);
    } catch (error) {
        console.log('auth', error);
        console.log(error);
        return res.sendStatus(500);
    }
}