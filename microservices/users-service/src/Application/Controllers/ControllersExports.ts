import UserRepository from '../../Infrastructure/Data/Repositories/UserRepository';
import UserService from '../Services/UserService';
import UserControllerImport from './UserController';
 
export const UserController = new UserControllerImport(new UserService(new UserRepository({ find: () => {}})));
