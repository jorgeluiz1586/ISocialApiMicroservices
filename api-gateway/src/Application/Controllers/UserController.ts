import { Request, Response } from 'express';
import UserService from '../Services/UserService';

export default class UserController
{
    constructor(private service: UserService) {}

    public index(request: Request, response: Response): void
    {
        this.service.getAllUsers(response);
    }
    
    public store(user: {}, response: Response) {
        const result = this.service.create(user);
        response.end(result);
    }
}
