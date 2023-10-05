import express from 'express';
import {userController} from '../controllers/index.js'
const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/', userController.getUser);
router.patch('/recharge', userController.rechargeBalance);

export default router