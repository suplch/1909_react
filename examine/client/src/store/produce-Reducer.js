import {fromJS, Map} from 'immutable';

const initState = fromJS({
    products: [
        {
            key: '1',
            name: '电脑',
            price: 1000,
            category: '电子产品',
        },
        {
            key: '2',
            name: '鼠标',
            price: 99,
            category: '电子产品',
        },            {
            key: '3',
            name: '帽子',
            price: 20,
            category: '服装',
        },
    ]

});

export function produceReducer(state = initState, action) {
    switch (action.type) {
        case 'SEARCH':
            return state;
        default:
            return state;
    }
}
