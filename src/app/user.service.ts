import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { USERS } from './mock-users';
import { User } from './models/user';


@Injectable()
export class UsersService{

    private _url: string = 'app/userdata.json';

    constructor( private http: Http ) {}

    getUser(id: number): Promise<User> {
        return this.getUsers().then(users => users.find(user => user._id === id));
    }

    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }
}