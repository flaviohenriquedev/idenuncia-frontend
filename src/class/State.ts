export class State {
    private _id: string;
    private _code: string;
    private _name: string;
    private _acronym: string;


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get acronym(): string {
        return this._acronym;
    }

    set acronym(value: string) {
        this._acronym = value;
    }
}