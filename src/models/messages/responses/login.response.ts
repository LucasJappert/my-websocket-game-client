import { Action } from "../../../utils/enums.utils";
import { ResponseBase, ResponseBaseCode } from "./response.base";

class Data {
    readonly userName: string = "";
    constructor(userName: string) {
        this.userName = userName;
    }
}

export default class LoginResponse extends ResponseBase {
    readonly data!: Data;

    constructor(id: Number, action: Action, responseCode: ResponseBaseCode, userName: string) {
        super(id, action, responseCode);

        this.data = new Data(userName);
    }

    Ok() {
        return this.responseCode == ResponseBaseCode.Ok;
    }
}
