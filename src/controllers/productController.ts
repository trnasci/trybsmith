import { NextFunction, Request, Response } from 'express';
import ProductService from '../services/productService';
import statusCodes from '../helpers/statusCodes';

export default class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAll = async (_request: Request, response: Response, _next: NextFunction) => {
    const products = await this.service.getAll();
    return response.status(statusCodes.OK).json(products);
  };

  public createProduct = async (request: Request, response: Response, _next: NextFunction) => {
    const product = request.body;
    const newProduct = await this.service.createProduct(product);
    return response.status(statusCodes.CREATED).json(newProduct);
  };  
}