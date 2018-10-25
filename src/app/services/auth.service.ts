import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { isNull } from 'util';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    constructor(
    ) { }

    userAuth() {
        const user: User = JSON.parse(localStorage.getItem('signed_user'));

        return isNull(user); // user.getState();
    }
}
