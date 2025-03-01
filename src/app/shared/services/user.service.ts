import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import { User } from '../../models/index';

@Injectable()
export class UserService {
  constructor(private http: Http, private config: AppConfig) { }

  getAll() {
    return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get(this.config.apiUrl + '/users/' + _id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(this.config.apiUrl + '/api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put(this.config.apiUrl + '/users/' + user._id, user, this.jwt());
  }

  delete(_id: string) {
    return this.http.delete(this.config.apiUrl + '/users/' + _id, this.jwt());
  }

  profileByEmail(email: string) {
    let sessionUser = JSON.parse(sessionStorage.getItem('sessionUser'));
    if(sessionUser !== null) {
      return sessionUser;
    } else {
      sessionUser = this.http.get(this.config.apiUrl + '/users/' + email, this.jwt())
      sessionStorage.setItem('sessionUser', sessionUser)
      return sessionUser;
    }
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
