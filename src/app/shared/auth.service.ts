import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  signin(username: string, password: string): boolean {

    if  (username === 'user' && password == 'password') {
      localStorage.setItem('storedusername', username);
      console.log(`username stored in local storage: Stored username is ${username}`);
      return true;
    }
    console.log('username is not available');
    return false;

  }

  signout(): any {
    localStorage.removeItem('storedusername');
  }

  getUser(): any {
    return localStorage.getItem('storedusername');
  }

  isUserLoggedIn(): boolean {
    return this.getUser() !== null;
  }

}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
]
