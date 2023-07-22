import express from 'express';
import { getScoreboard, getUsers,login,loginByGmail,register, updateUserScore } from '../controllers/user.js';

// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/users', getUsers);
router.get('/scoreboard', getScoreboard);
/* POST */
router.post('/add-user',register)
router.post('/login-user',login)
router.post('/login-user-gmail',loginByGmail)
/* PUT */
router.put('/update-score/:id',updateUserScore)





export default router;
