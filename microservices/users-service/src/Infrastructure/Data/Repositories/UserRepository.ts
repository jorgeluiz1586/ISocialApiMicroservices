import IRepository from "../Interfaces/IRepository";

export default class UserRepository implements IRepository
{
    constructor(private model: object) {}

    public all()
    {
        const result = [{}];
        return result;
    }

    public search(search: string)
    {}

    public findOne(id: number)
    {}

    public create(data: object)
    {}

    public update(id: number, data: object)
    {}

    public delete(id: number)
    {}
}
