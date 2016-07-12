import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';


@inject(HttpClient)
export class Users {
    users = [];

    constructor(http) {
        this.http = http;
    }

    activate(app) {
        return this.http.fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(users => {
                this.users = users;
            });
    }
}