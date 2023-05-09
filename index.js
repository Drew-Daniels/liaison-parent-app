import { Parent } from 'https://unpkg.com/liaison-core@latest/lib/index.js'

function setLoginStatus(status) {
    const statusEl = document.getElementById('login-status');
    statusEl.innerText = status;
}

const parent = Parent({
    iframe: {
        id: 'iframe',
        src: 'http://localhost:5501'
    },
    effects: {
        onTokenRequested: ({ callIFrameEffect }) => {
            const token = 'xyz';
            callIFrameEffect({ name: 'onTokenReceived', args: { token } });
        },
        onIFrameUserLoggedIn: () => {
            setLoginStatus(true);
        },
        onIFrameLogoutComplete: () => {
            setLoginStatus(false);
        }
    }
});

const logoutButton = document.getElementById('logout-button');
logoutButton.onclick = () => {
    parent.callIFrameEffect({ name: 'onLogoutRequested', args: {} });
}