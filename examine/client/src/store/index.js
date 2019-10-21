import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';

import {
    combineReducers
} from 'redux-immutable';


import {loginReducer} from './login-reducer';
import {produceReducer} from './produce-Reducer';

const appReducer = combineReducers({
    login: loginReducer,
    product: produceReducer,
});

const store = createStore(appReducer, applyMiddleware(thunk));
export { store }
