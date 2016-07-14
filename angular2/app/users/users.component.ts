import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-users',
  templateUrl: '../app/users/users.component.html'
})
export class UsersComponent { 
    @Input() 
    users: any[];
}