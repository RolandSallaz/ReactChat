import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import {BrowserRouter} from "react-router-dom";

const isDev = import.meta.env.DEV

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={isDev ? '' : 'ReactChat'}>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)
