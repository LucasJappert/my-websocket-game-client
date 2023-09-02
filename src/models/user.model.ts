import { UpdateFaviconIcon } from "../utils/dom.utils.ts";
import { Action } from "../utils/enums.utils";
import LoginRequest from "./messages/requests/login.request.ts";
import LoginResponse from "./messages/responses/login.response";
import { ResponseBase } from "./messages/responses/response.base";

export default class MyUser {
    readonly socket!: WebSocket;
    private userName: string = "";

    constructor(socket: WebSocket) {
        this.socket = socket;

        this.socket.addEventListener('open', (event: Event) => {
            console.log(`Conexión establecida!`);
        });

        this.socket.addEventListener('message', (event: MessageEvent) => {
            this.ReceivedMessage(event.data);
        });

        this.socket.addEventListener('close', (event: CloseEvent) => {
            console.log(`Conexión cerrada: ${event.code}`);
            UpdateFaviconIcon("/no-logged.png");
        });
    }

    Login(userName: string) {
        const message = new LoginRequest(0, userName);
        this.socket.send(JSON.stringify(message));
    }
    ReceivedMessage(stringifyData: string) {
        const data: ResponseBase = JSON.parse(stringifyData);
        if (data.action == Action.Login) {
            const loginData = JSON.parse(stringifyData) as LoginResponse;
            const loginResponse = new LoginResponse(loginData.id, loginData.action, loginData.responseCode, loginData.data.userName);
            if (loginResponse.Ok()) {
                this.userName = loginResponse.data.userName;
                console.log(`Ingresaste al juego como ${this.userName}`);
                UpdateFaviconIcon("/logged.png");
            }

        }
    }
}
