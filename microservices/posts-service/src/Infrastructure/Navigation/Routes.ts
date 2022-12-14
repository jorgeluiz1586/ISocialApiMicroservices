import Managers from '../Controllers/ControllersExports';
import server from '../../../server';

server.get('/api', (req, res) => { Managers.IndexController.index(req, res) });

export default server;
