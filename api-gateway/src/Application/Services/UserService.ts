import { Response } from 'express';
import { CreateUserInput } from '_proto/user/CreateUserInput';
import clientGrpc from '../../../client-grpc';
import { Query } from '../../../_proto/commons/Query';

export default class UserService
{
    public getAllUsers(response: Response)
    {
        clientGrpc.find({} as unknown as Query, (error, user) => {
            if (error) {
                console.log(error);
                response.end(JSON.stringify(error));
            } else {
                console.log(user.edges);
                response.end(JSON.stringify(user));
            }
        });
    }

    public create(user)
    {
        clientGrpc.create(user as unknown as CreateUserInput, (error, userServiceResponse) => {
            if (error) {
                console.log(error);
            } else {
                console.log(userServiceResponse);
                return userServiceResponse;
            }
        });
    }
}
