import express from 'express';
import {  addQuestions, getQuestions} from '../controllers/question.js';
import { verifyToken } from '../middleware/auth.js';

// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/questions/:type',verifyToken, getQuestions);

/* POST */
router.post('/add-question',verifyToken, addQuestions);





// router.post('/add-user', addQuestions);

export default router;
