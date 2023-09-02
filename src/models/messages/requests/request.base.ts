import { Action } from "../../../utils/enums.utils";

export class RequestBase {
    id: Number = 0;
    action: Action = Action.NULL;

    constructor(id: Number, action: Action) {
        this.id = id;
        this.action = action;
    }
}
