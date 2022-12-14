import {  UserController } from '../../Application/Controllers/ControllersExports';
import server from '../../../server';

server.get('/api', (req, res) => { res.end('Api Gateway Working'); });
server.get('/api/users', (req, res) => { UserController.index(req, res) });
server.post('/api/user/create', (req, res) => { UserController.store(req.body.user, res) });

export default server;
