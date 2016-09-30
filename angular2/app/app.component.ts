import { Component, OnInit } from '@angular/core';

import { UsersService } from '../app/users/users.service';

@Component({
  selector: 'my-app',
  template: 
  `
  <my-header></my-header>
  <my-loader *ngIf="isLoading"></my-loader>
  <my-users *ngIf="!isLoading" [users]="users"></my-users>  
  `,
  providers: [
    UsersService
  ]
})
export class AppComponent implements OnInit { 
  users: any[];
  isLoading: boolean;

  constructor(private usersService: UsersService){
    this.isLoading = true;
  }

  ngOnInit(){
    this.usersService
        .getUsers()
        .subscribe(users => 
        {
          this.users = users
          this.isLoading = false;
        });
  }

}