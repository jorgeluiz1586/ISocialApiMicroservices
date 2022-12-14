import { UserController } from '../../Application/Controllers/ControllersExports';
import serverGrpc from '../../../grpc-server';
import { userProto } from '../../Config/Grpc';
import { UserServiceHandlers } from '../../../_proto/user/UserService';

serverGrpc.addService(userProto.user.UserService.service, {
    find: (input, callback) => {
        try {
            const result = UserController.index();
            callback(null, result);
        } catch (error) {
            callback(error, null);
        }
    },
    create: (user, callback) => {
        try {
            const result = UserController.store(user);
            callback(null, result);
        } catch (error) {
            callback(error, null);
        }
    },
} as unknown as UserServiceHandlers);

export default serverGrpc;
