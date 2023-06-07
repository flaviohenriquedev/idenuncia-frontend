import {City} from "@/class/City";

export class Company {
    private _id: string;
    private _code: string;
    private _name: string;
    private _cnpj: string;
    private _city: City;

    constructor(id: string, name: string, city: City) {
        this._id = id;
        this._name = name;
        this._city = city;
    }

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


    get cnpj(): string {
        return this._cnpj;
    }

    set cnpj(value: string) {
        this._cnpj = value;
    }

    get city(): City {
        if(!this._city) {
            this._city = new City();
        }
        return this._city;
    }

    set city(value: City) {
        this._city = value;
    }
}