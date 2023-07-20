import express from 'express';
import { cssQuestions, htmlQuestions, javascriptQuestions, nextQuestions, nodeQuestions, reactQuestions } from '../controllers/question.js';

// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/questions/html', htmlQuegir stions);
router.get('/questions/css', cssQuestions);
router.get('/questions/javascript', javascriptQuestions);
router.get('/questions/react', reactQuestions);
router.get('/questions/next', nextQuestions);
router.get('/questions/node', nodeQuestions);

// router.post('/add-user', addQuestions);

export default router;
