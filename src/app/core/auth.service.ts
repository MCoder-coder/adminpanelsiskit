import { Injectable } from '@angular/core';


import { Router } from '@angular/router';


export class User {
    constructor(
      public email: string,
      public password: string) { }
  }
  
  var users = [
    new User('admin@admin.com','adm9'),
    new User('user1@gmail.com','a23')
  ];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(
    private route : Router,
    
  ) { }

  

}