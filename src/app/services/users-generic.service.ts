import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';

export abstract class UsersGenericService extends BehaviorSubject<User[]> {
    abstract getAllAsync(): Observable<Array<User>>;
    abstract getAll(): Array<User>;
    abstract addUser(user: User): User[] | Observable<User[]>;
}