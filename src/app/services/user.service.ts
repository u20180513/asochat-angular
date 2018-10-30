import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Subject, empty } from 'rxjs';
import { Router } from '@angular/router';

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
    private http: HttpClient,
    private router: Router,
  ) {
    this.apiRoot = '';
    this.results = [];
    this.loading = false;
    this.user = new User();
  }




  public login(loginUser: User): void {
    let path: String = '';
    // postで飛ばして、jsonデータが帰ってきたら、
    // Userオブジェクトに型付ける。
    // Stateはtrueに。
    // それを、sessionStorageにkeyをlogined_userで
    // オブジェクトを格納。

    // this.apiRoot = this.apiRoot + '?num=' + student_number + 'pass=' + password;

    this.user.state = true;
    this.user.is_first_login = true;
    const json_data: string = JSON.stringify(this.user);
    const res_user: User = JSON.parse(json_data);

    localStorage.setItem('signed_user', json_data);

    if (res_user.is_first_login) {
      path = 'new-name';
    }
    if (res_user.state) {
      path = 'top';
    }
    this.router.navigate([path]);
  }

  public logout(): void {
    if (0 < localStorage.length) {
      localStorage.removeItem('signed_user');
    }
    this.router.navigate(['top']);
  }

  /**
   * 初回ログインで使用。
   * 名前の登録。
   *
   * @param name - 新しい名前
   */
  public regist_name(handlename: string) {
    const session_user: User = JSON.parse(localStorage.getItem('signed_user'));
    session_user.name = handlename;

    // 登録。POST送信。登録処理が完了すれば...
    const res_state = true;
    if (res_state) {
      localStorage.setItem('signed_user', JSON.stringify(session_user));
    }

    this.router.navigate(['top']);
  }
}
