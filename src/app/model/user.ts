export class User {
    id: number;
    num: number;
    name: string;
    password: string;
    state: boolean;
    is_first_login: boolean; // 初ログインの確認用
    auth: boolean;

    constructor(
        id?: number,
        num?: number,
        name?: string,
        password?: string,
        state?: boolean,
        is_first_login?: boolean,
        auth?: boolean,
    ) {
    }
}
