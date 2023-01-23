import { Request, Response } from 'express';
import pointServices from '../../services/point-service';


export async function listPoints(req:Request, res: Response) {
    try {
    const points = await pointServices.getPoints();
    console.log({points});
    // return res.status(200).send(points.map());
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};
