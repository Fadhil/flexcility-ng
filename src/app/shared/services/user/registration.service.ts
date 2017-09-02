import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../../app.config';
import { User } from '../../../models/index';

@Injectable()
export class RegistrationService {

    constructor(private http: Http, private config: AppConfig) { }

    new_user(user: User) {
        return this.http.post(this.config.apiUrl + '/api/registration', user).map((response: Response) => response.json());
      }

}