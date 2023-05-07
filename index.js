import { Parent } from 'https://unpkg.com/liaison-core/lib/index.js'

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