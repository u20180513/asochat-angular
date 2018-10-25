export class User {
    private id: number;
    private num: number;
    private name: string;
    private password: string;
    private state: boolean;

    constructor(
        id?: number,
        num?: number,
        name?: string,
        password?: string,
        state?: boolean,
    ) {
    }

    public setName(name: string) {
        this.name = name;
    }

    public getState() {
        return this.state;
    }
    public setState(state: boolean) {
        this.state = state;
    }

    public setPassword(password: string) {
        this.password = password;
    }
}
