import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { isNull } from 'util';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    constructor(
    ) { }

    /**
     * ログインチェック
     */
    userAuth() {
        const result = !isNull(localStorage.getItem('signed_user'));
        return result;
    }

    adminAuth() {
        const user: User = JSON.parse(localStorage.getItem('signed_user'));
        // user.id から管理者確認
        const result = true;
        return result;
    }
}
