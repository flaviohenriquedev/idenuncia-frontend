import {State} from "@/class/State";

export class City {
    private _id: string;
    private _code: string;
    private _name: string;
    private _state: State


    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get state(): State {
        if(!this._state) {
            this._state = new State();
        }
        return this._state;
    }

    set state(value: State) {
        this._state = value;
    }
}