import { Pool } from 'mysql2/promise';
import { IProduct } from '../interfaces/Iproduct';

export default class ProductModel {
  // levar todos metodos de user (p acessar o banco)
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const query = 'SELECT * FROM Trybesmith.products';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IProduct[];
  }
}