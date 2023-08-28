import './style.css';
import MyWebSocket from './web-socket/web-socket.model';
import "./dom-events";
import { Action } from './utils/enums.utils';
import MessageData from './models/message-data.model';
class Game {
    myWebSocket: MyWebSocket = new MyWebSocket('ws://localhost:8080');

    Login(userName: string) {
        const message: MessageData = {
            id: 0,
            action: Action.Login,
            options: {
                userName
            }
        };
        this.myWebSocket.SendMessage(message);
    }

}

export let game = new Game();







