import { User } from '../models/user';
import { Observable } from 'rxjs';

export abstract class UsersGenericService {
    abstract getAllAsync(): Observable<Array<User>>;
    abstract getAll(): Array<User>;
    abstract addUser(user: User);
}