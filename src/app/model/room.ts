import { User } from './user';

export class Room {
    constructor(
        private id: number,
        private creator: User,
        private name: string,
        private desc: string,
        private pass: string,
        private participants: Array<User>,
    ) { }

    public getPass(): string {
        return this.pass;
    }
}
