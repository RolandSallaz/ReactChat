import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.scss'
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>,
)
