import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/Iusers';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const query = 'SELECT * FROM Trybesmith.users';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IUser[];
  }

  public async createUser(user: IUser): Promise<IUser> {
    const { username, vocation, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}