import { game } from "./game";

const botonLogin = document.getElementById('botonLogin');
if (botonLogin) botonLogin.addEventListener('click', () => {
    if (game.myWebSocket.readyState == WebSocket.OPEN) {
        const inputUserName = document.getElementById('inputUserName') as HTMLInputElement;
        game.Login(inputUserName.value);
    }
});
