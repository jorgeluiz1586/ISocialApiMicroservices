export default interface IRepository
{
    all();

    search(search: string);

    findOne(id: number);

    create(data: object);

    update(id: number, data: object);

    delete(id: number);
}
