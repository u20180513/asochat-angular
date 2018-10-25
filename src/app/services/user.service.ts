import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Subject, empty } from 'rxjs';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  apiRoot: string;
  results: Object[];
  loading: boolean;

  private data = new Subject<User>();

  public data$ = this.data.asObservable();

  constructor(
    private http: HttpClient
  ) {
    this.apiRoot = '';
    this.results = [];
    this.loading = false;
    this.user = new User();
  }

  public login(loginUser: User): void {
    // postで飛ばして、jsonデータが帰ってきたら、
    // Userオブジェクトに型付ける。
    // Stateはtrueに。
    // それを、sessionStorageにkeyをlogined_userで
    // オブジェクトを格納。

    // this.apiRoot = this.apiRoot + '?num=' + student_number + 'pass=' + password;

    if (loginUser === new User(0, 111, '', 'aaa', false)) {
      console.log('signed user');
      loginUser.setState(true);
      localStorage.setItem('signed_user', JSON.stringify(this.user));
    }
    /*
    if (this.user.getState) {
      localStorage.setItem('signed_user', JSON.stringify(this.user));
      // sessionStorage.setItem('signed_user', JSON.stringify(this.user));
    }
    */
  }

  logout(): boolean {
    // post 送信
    if (localStorage.length !== 0) {
      localStorage.removeItem('signed_user');
      return true;
    }
    return false;
  }

  public DataAdd(name: string, password: string) {
    this.user.setName(name);
    this.user.setPassword(password);

    this.data.next(this.user);
  }
}
