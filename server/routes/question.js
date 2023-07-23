import express from 'express';
import {  htmlQuestions} from '../controllers/question.js';
import { verifyToken } from '../middleware/auth.js';

// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/questions/:type',verifyToken, htmlQuestions);


// router.post('/add-user', addQuestions);

export default router;
