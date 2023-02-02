import { Router } from 'express';
import { login, registerUser } from '../../controllers/auth-controller/index.js';

const authRouter = Router();

authRouter
.post("/signUp", registerUser)
.post("/signIn", login);

export{authRouter}

