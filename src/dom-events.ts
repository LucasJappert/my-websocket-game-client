import Game from "./game";

const botonLogin = document.getElementById('botonLogin');
if (botonLogin) botonLogin.addEventListener('click', () => {
    if (Game.myUser.socket.readyState == WebSocket.OPEN) {
        const inputUserName = document.getElementById('inputUserName') as HTMLInputElement;
        Game.myUser.Login(inputUserName.value);
        return;
    }

    console.log("Parece que no hay conexion!");
});

