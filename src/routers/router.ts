import { Router } from 'express';
import UsersController from '../controllers/usersController';
import ProductController from '../controllers/productController';
import OrderController from '../controllers/orderController';

const router = Router();
const userController = new UsersController();
const productController = new ProductController();
const orderController = new OrderController();

router.post('/users', userController.createUser);
router.get('/users', userController.getAll);
router.post('/products', productController.createProduct);
router.get('/products', productController.getAll);
router.get('/orders', orderController.getAll);

export default router;