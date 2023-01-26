import { Router } from 'express';
import { registerUser } from '../../controllers/auth-controller/index.js';

const authRouter = Router();

authRouter
.post("/signUp", registerUser);

export{authRouter}

