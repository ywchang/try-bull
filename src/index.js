import 'babel-polyfill';
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import * as ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'


const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));