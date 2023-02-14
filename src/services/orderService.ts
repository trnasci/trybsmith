import { IOrder } from '../interfaces/Iorder';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}