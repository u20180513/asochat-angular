export class Event {
    id: number;
    name: string;
    image_path: string;
    description: string;
    max_user: number;
    date: string;
    auth_flg: number;

    constructor(
        id?: number,
        name?: string,
        image_path?: string,
        description?: string,
        max?: number,
        date?: string,
        auth_flg?: number,
    ) { }
}
