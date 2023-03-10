import connection from '../models/connection';
import ProductModel from '../models/productModel';
import { IProduct } from '../interfaces/Iproduct';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll() {
    const result = await this.model.getAll();
    return result;
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.createProduct(product);
    return newProduct;
  }
}