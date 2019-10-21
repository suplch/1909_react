import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {store} from './store';

import 'antd/dist/antd.css'
import './css/style.css';

import {App} from './App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
