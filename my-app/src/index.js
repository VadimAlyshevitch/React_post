import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , Route } from 'react-router-dom'
import { About } from './Components/About';
ReactDOM.render(
    <BrowserRouter > 
        <div>
        <Route exact path='/' component={App}/> 
        <Route path='/about' component={ About }  /> 
        </div>
    </BrowserRouter >, document.getElementById('root'));



serviceWorker.unregister();
