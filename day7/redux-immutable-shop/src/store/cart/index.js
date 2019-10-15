import {fromJS, Map} from 'immutable';

const initState = fromJS({
    items: [
        {id: '111', name: '电脑', price: 10000, count: 2},
    ]
});

export function cartReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_CART':
            return state.update('items', function (items) {
                const position = items.findIndex(function (item) {
                    return item.get('id') === action.payload.product.get('id');
                });
                if (position === -1) {
                    return items.push(Map({...action.payload.product.toJS(), count: 1}))
                } else {
                    return items.updateIn([position, 'count'], function (count) {
                        return count + 1;
                    })

                }
            });
        case 'CHANGE_CART_COUNT':
            const {pid, n} = action.payload;

            // 方法三
            return state.update('items', function (items) {
                const position = items.findIndex(function (item) {
                    return item.get('id') === pid
                });
                return items.updateIn([position, 'count'], function (count) {
                    return count + n
                })
            });


        default:
            return state;
    }
}
