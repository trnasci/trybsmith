import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import { IUser } from '../interfaces/Iusers';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async getAll() {
    const result = await this.model.getAll();
    return result;
  }

  public async createProduct(user: IUser): Promise<IUser> {
    const newUser = await this.model.createUser(user);
    return newUser;
  }
}