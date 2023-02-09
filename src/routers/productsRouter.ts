import { Router } from 'express';
import ProductController from '../controllers/productController';

const productsRouter = Router();
const userController = new ProductController();

productsRouter.get('/products', userController.getAll);

export default productsRouter;