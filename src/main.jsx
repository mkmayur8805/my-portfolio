import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import { BrowserRouter } from 'react-router-dom'

import "@fontsource/manrope";        // all weights
import "@fontsource/montserrat";
import "@fontsource/dm-sans";
import "@fontsource/source-sans-3";
import "@fontsource/dm-mono";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
