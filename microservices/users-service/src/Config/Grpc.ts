import { loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { ProtoGrpcType } from '_proto/user';

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

export const userProto = loadPackageDefinition(loadSync('./_proto/user.proto', options)) as unknown as ProtoGrpcType;
