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
        let result: boolean;
        result = !isNull(localStorage.getItem('signed_user'));

        return result;
    }
}
