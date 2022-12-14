import IRepository from "src/Infrastructure/Data/Interfaces/IRepository";

export default class UserService
{
    constructor(private userRepository: IRepository) {}

    public list(): unknown
    {
        return {
            edges: [
                {
                    node: {
                        id: 1,
                        name: 'Junior',
                        email: 'junior@gmail.com',
                        password: '12345678Junior',
                        age: 23,
                        createdAt: '2022-12-11 12:05:30',
                        updatedAt: '2022-12-11 12:05:30',
                        version: 8,
                    },
                    cursor: '1'
                },
                {
                    node: {
                        id: 1,
                        name: 'Carla',
                        email: 'carla@gmail.com',
                        password: '12345678Carla',
                        age: 23,
                        createdAt: '2022-12-11 12:05:30',
                        updatedAt: '2022-12-11 12:05:30',
                        version: 8,
                    },
                    cursor: '1'
                },
                {
                    node: {
                        id: 1,
                        name: 'Ricardo',
                        email: 'ricardo@gmail.com',
                        password: '12345678Ricardo',
                        age: 23,
                        createdAt: '2022-12-11 12:05:30',
                        updatedAt: '2022-12-11 12:05:30',
                        version: 8,
                    },
                    cursor: '1'
                }
            ],
            pageInfo: {
                startCursor: 'center',
                endCursor: 'top-left',
                hasNextPage: true,
                hasPreviousPage: true,
            },
        };
    }

    public create(user: {})
    {
        return user;
    }
}