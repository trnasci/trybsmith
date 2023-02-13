import { Router } from 'express';
import ProductController from '../controllers/productController';

const productsRouter = Router();
const productController = new ProductController();

productsRouter.post('/products', productController.createProduct);
productsRouter.get('/products', productController.getAll);

export default productsRouter;