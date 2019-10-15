import {fromJS, Map} from 'immutable';

const initState = fromJS([
    {id: '111', name: '电脑', price: 10000},
    {id: '222', name: '鼠标', price: 99},
    {id: '333', name: '鼠标', price: 199},

]);

export function productReducer(state = initState, action) {
    return state;
}
