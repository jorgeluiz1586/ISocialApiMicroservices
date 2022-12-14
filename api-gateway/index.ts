import * as dotenv from 'dotenv';
import server from './src/Infrastructure/Navigation/Routes';

dotenv.config()

server.listen(process.env.APP_PORT, function () {
    console.log(`server running on http://localhost:${process.env.APP_PORT}`)
});