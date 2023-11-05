import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { menu } from "./section/menu.js";
import { port } from "./section/port";
import { link } from "./section/link.js";
import { smooth } from "./section/smooth.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    port();
});