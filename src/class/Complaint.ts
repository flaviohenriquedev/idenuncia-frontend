import {Company} from "@/class/Company";
import {ComplaintType} from "@/class/ComplaintType";
import {PlaceComplaint} from "@/class/PlaceComplaint";

export class Complaint {
    private _id: string;
    private _code: number;
    private _nameDenunciator: string;
    private _emailDenunciator: string;
    private _phoneDenunciator: string;
    private _denounced: Company;
    private _complaintType: ComplaintType;
    private _localeComplaint: PlaceComplaint;
    private _dateComplaint: Date;
    private _anony: boolean;


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get code(): number {
        return this._code;
    }

    set code(value: number) {
        this._code = value;
    }

    get nameDenunciator(): string {
        return this._nameDenunciator;
    }

    set nameDenunciator(value: string) {
        this._nameDenunciator = value;
    }

    get emailDenunciator(): string {
        return this._emailDenunciator;
    }

    set emailDenunciator(value: string) {
        this._emailDenunciator = value;
    }

    get phoneDenunciator(): string {
        return this._phoneDenunciator;
    }

    set phoneDenunciator(value: string) {
        this._phoneDenunciator = value;
    }

    get denounced(): Company {
        return this._denounced;
    }

    set denounced(value: Company) {
        this._denounced = value;
    }

    get complaintType(): ComplaintType {
        return this._complaintType;
    }

    set complaintType(value: ComplaintType) {
        this._complaintType = value;
    }

    get localeComplaint(): PlaceComplaint {
        return this._localeComplaint;
    }

    set localeComplaint(value: PlaceComplaint) {
        this._localeComplaint = value;
    }

    get dateComplaint(): Date {
        return this._dateComplaint;
    }

    set dateComplaint(value: Date) {
        this._dateComplaint = value;
    }

    get anony(): boolean {
        return this._anony;
    }

    set anony(value: boolean) {
        this._anony = value;
    }
}