import { Action } from "../utils/enums.utils";
export default interface MessageData {
    id: Number;
    action: Action;
    options: any;
}
