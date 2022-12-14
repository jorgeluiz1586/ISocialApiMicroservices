import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { ProtoGrpcType } from '_proto/user';

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const userClient = (loadPackageDefinition(loadSync('./_proto/user.proto', options))  as unknown as ProtoGrpcType).user.UserService;

const client = new userClient(
    "isocial_users_service_api_dev:5001",
    credentials.createInsecure()
);

export default client;