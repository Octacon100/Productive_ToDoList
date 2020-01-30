export class Todo {
    id: number;
    title: string = "";
    numberOfPomerdoros: number = 0;
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}