import React from 'react';
import { createRoot } from "react-dom/client"
import './index.css';
import App from './App';

import './assets/fonts/Cooperhewitt/cooperhewitt-light.ttf';
import './assets/fonts/OpenSans/OpenSans-ExtraBoldItalic.ttf';
import './assets/fonts/Yellowtail/Yellowtail-Regular.ttf';

//React DOM v18
const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)