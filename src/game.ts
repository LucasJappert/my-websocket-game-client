// import './style.css';
import './style.css';
import "./dom-events";
import MyUser from './models/user.model.ts';
import { UpdateFaviconIcon } from './utils/dom.utils.ts';
export default class Game {
    static myUser: MyUser;

    static async TryConnectWithServer() {
        this.myUser = new MyUser(new WebSocket("ws://localhost:8080"));
    }
}

Game.TryConnectWithServer();

UpdateFaviconIcon("/no-logged.png");








