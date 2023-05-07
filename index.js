import { Parent } from 'https://unpkg.com/liaison-core@latest/lib/index.js'

const parent = Parent({
    iframeOpts: {
        id: 'iframe',
        containerId: 'iframe-container',
        // src: 'https://drew-daniels.github.io/liaison-iframe-app',
        src: 'http://localhost:5501',
        classes: ['iframe'],
    },
    effects: {
        sayHiFromParent: () => console.log('Hello from Parent!')
    }
});
parent.init();

const button = document.getElementById('parent-btn');
button.onclick = () => {
    parent.callIFrameEffect({ name: 'sayHiFromIFrame', args: {} })
}

const p2 = Parent({
    iframeOpts: {
        id: 'iframe2',
        containerId: 'iframe-container-2',
        src: 'http://localhost:5502',
        classes: ['iframe'],
    },
    effects: {
        sayHiFromParent: () => console.log('Hello from parent?')
    }
})

p2.init();

const button2 = document.getElementById('parent-btn-2');
button2.onclick = () => {
    p2.callIFrameEffect({ name: 'sayHiFromIFrame', args: {} })
}
