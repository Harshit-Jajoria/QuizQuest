import express from 'express';
import { cssQuestions, htmlQuestions, javascriptQuestions, nextQuestions, nodeQuestions, reactQuestions } from '../controllers/question.js';

// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/questions/html', htmlQuestions);
router.get('/questions/css', cssQuestions);
router.get('/questions/javascript', javascriptQuestions);
router.get('/questions/react', reactQuestions);
router.get('/questions/nextjs', nextQuestions);
router.get('/questions/nodejs', nodeQuestions);

// router.post('/add-user', addQuestions);

export default router;
