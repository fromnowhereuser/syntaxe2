import { User } from '../models/user';

export abstract class UsersGenericService {
    abstract getAll(): Array<User>;
    abstract addUser(user: User);
}