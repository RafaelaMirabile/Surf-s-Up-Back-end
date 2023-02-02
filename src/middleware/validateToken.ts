import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export default function validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!authorization) {
        return res.status(401).send("no headers");
    }

    try {
        const verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);
        res.locals.user = verifiedUser;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).send("invalid token");
    }

}