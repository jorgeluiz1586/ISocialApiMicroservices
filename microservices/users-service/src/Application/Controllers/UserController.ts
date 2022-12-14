import { Request, Response } from 'express';
import UserService from '../Services/UserService';

export default class UserController
{
    constructor(private userService: UserService) {}

    public index(): unknown
    {
        
        const result = this.userService.list();
        return result; 
    }

    public store(user): object
    {
        const result = this.userService.create(user);
        return result;
    }
}
