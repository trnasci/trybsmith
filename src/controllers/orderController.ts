import { NextFunction, Request, Response } from 'express';
import statusCodes from '../helpers/statusCodes';
import OrderService from '../services/orderService';

export default class OrderController {
  public service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_request: Request, response: Response, _next: NextFunction) => {
    const orders = await this.service.getAll();
    return response.status(statusCodes.OK).json(orders);
  };
}