import { Action } from "../../../utils/enums.utils";
export enum ResponseBaseCode {
    Ok = 1,
    Fail = 2
}

export class ResponseBase {
    readonly id: Number;
    readonly action: Action;
    readonly responseCode: ResponseBaseCode;

    constructor(id: Number, action: Action, responseCode: ResponseBaseCode) {
        this.id = id;
        this.action = action;
        this.responseCode = responseCode;
    }
}
