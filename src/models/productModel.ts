import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/Iproduct';

export default class ProductModel {
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

  public async createProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}