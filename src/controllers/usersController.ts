import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import statusCodes from '../helpers/statusCodes';
import UsersService from '../services/usersService';

const secret: string = process.env.JWT_SECRET || 'meugrandesegredo';

export default class UsersController {
  public service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  public getAll = async (_request: Request, response: Response, _next: NextFunction) => {
    const users = await this.service.getAll();
    return response.status(statusCodes.OK).json(users);
  };

  public createUser = async (request: Request, response: Response, _next: NextFunction) => {
    const user = request.body;
    await this.service.createProduct(user);
    const token: string = jwt.sign({
      user,
    }, secret, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return response.status(statusCodes.CREATED).json({ token });
  };  
}