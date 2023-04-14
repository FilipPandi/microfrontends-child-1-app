import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';

let root = null;
let container = null;
window.renderChild1 = (containerId) => {
    container = document.getElementById(containerId);
    root = ReactDOMClient.createRoot(container);

    root.render(<App/>);
};

window.unmountChild1 = () => {
    root.unmount(container);
};

if (!document.getElementById('Child1-container')) {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container);
    root.render(<App/>);
}
