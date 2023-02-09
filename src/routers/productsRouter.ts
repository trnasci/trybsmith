import { Router } from 'express';
import ProductController from '../controllers/productController';

const productsRouter = Router();
const userController = new ProductController();

productsRouter.post('/products', userController.createProduct);
productsRouter.get('/products', userController.getAll);

export default productsRouter;