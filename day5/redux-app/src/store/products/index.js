import { genId } from '../../utils';

const products = [
    {id: '222', name: 'bbb', price: 123}
];

export function productReducer(state = products, action) {
    switch( action.type ) {
        case 'ADD_PRODUCT':
            return [...state, {id: genId(), name: action.productName, price: 99}];
        case 'ADD_PRODUCT_OBJ':
            return [...state, action.product];
        default:
            return state
    }
}
