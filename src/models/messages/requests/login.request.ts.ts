import { Action } from "../../../utils/enums.utils";
import { RequestBase } from "./request.base";


export default class LoginRequest extends RequestBase {
    userName: string;

    constructor(id: Number, userName: string) {
        super(id, Action.Login);

        this.userName = userName;
    }
}
