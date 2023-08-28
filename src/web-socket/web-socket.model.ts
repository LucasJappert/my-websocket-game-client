import MessageData from "../models/message-data.model";
export default class MyWebSocket extends WebSocket {

    constructor(url: string) {
        super(url);

        this.addEventListener('open', (event: Event) => {
            console.log(`Conexión establecida!`);
        });

        this.addEventListener('message', (event: MessageEvent) => {
            console.log(`${event.data}`);
        });

        this.addEventListener('close', (event: CloseEvent) => {
            console.log(`Conexión cerrada: ${event.code}`);
        });
    }

    SendMessage(message: MessageData) {
        this.send(JSON.stringify(message));
    }
    ReceivedMessage(stringifyData: string) {
        const data: MessageData = JSON.parse(stringifyData);
        console.log(data);
    }
}
