import * as dotenv from 'dotenv';
import { ServerCredentials } from '@grpc/grpc-js';
import serverGrpc from './src/Infrastructure/Navigation/GrpcServiceEvent';

dotenv.config();

serverGrpc.bindAsync(
    `0.0.0.0:${process.env.APP_PORT}`,
    ServerCredentials.createInsecure(),
        (error, port) => {
            console.log(`listening on port ${port}`);
            serverGrpc.start();
    }
);