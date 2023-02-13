import { Router } from 'express';
import UsersController from '../controllers/usersController';

const usersRouter = Router();
const userController = new UsersController();

usersRouter.post('/users', userController.createUser);
usersRouter.get('/users', userController.getAll);

export default usersRouter;