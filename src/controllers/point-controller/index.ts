import { Request, Response } from 'express';
import pointServices from '../../services/point-service/index.js';


export async function listPoints(req:Request, res: Response) {
    try {
    const points = await pointServices.getPoints();
     return res.status(200).send(points.map(value => value));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    };
};

