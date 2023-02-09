import { NextFunction, Request, Response } from 'express';
import ProductService from '../services/productService';

export default class UserController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAll = async (_request: Request, response: Response, _next: NextFunction) => {
    const users = await this.service.getAll();
    return response.status(200).json(users);
  };
}