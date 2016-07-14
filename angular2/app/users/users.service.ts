import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs'

@Injectable()
export class UsersService {
    constructor(private http: Http){}

    getUsers(): Observable<any> {
        return this.http
                .get('https://api.github.com/users')
                .map((resp:Response) => resp.json());
    }
}