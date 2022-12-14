import { Request, Response } from 'express';

export default class IndexController
{
    public index(request: Request, response: Response): void
    {
        response.end('Ok');
    }
}
