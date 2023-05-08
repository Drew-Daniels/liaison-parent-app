import { Parent } from 'https://unpkg.com/liaison-core@latest/lib/index.js'

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const parent = Parent({
    iframeId: 'iframe',
    iframeSrc: 'http://localhost:5501',
    effects: {
        sayHiFromParentSync: () => {
            const messagesList = document.getElementById('parent-messages-sync');
            const message = document.createElement('li');
            message.innerText = 'Synchronous message received from iframe';
            message.classList.add('message');
            messagesList.appendChild(message);
        },
        sayHiFromParentAsync: async () => {
            await timeout(3000);
            const messagesList = document.getElementById('parent-messages-async');
            const message = document.createElement('li');
            message.innerText = 'Asynchronous message received from iframe';
            message.classList.add('message');
            messagesList.appendChild(message);
        }
    }
});

const button = document.getElementById('parent-btn-sync');
button.onclick = () => {
    parent.callIFrameEffect({ name: 'sayHiFromIFrame', args: {} });
}

const buttonAsync = document.getElementById('parent-btn-async');
buttonAsync.onclick = () => {
    parent.callIFrameEffect({ name: 'sayHiFromIFrameAsync', args: {} });
}
