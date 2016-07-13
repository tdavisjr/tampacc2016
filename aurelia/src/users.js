import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Users {
    users = [];

    constructor(http) {
        this.http = http;
    }

    activate(app) {
        return this.http
            .get('https://api.github.com/users')
            .then(resp => {
                this.users = resp.content;
            });
    }
}