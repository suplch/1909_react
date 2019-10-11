function createGenId(initId) {
    return function () {
        return initId++;
    }
}
// 创建一个 id 生成器
const genId = createGenId(1000);

const products = [
    {id: '222', name: 'bbb', price: 123}
];

export function productReducer(state = products, action) {
    switch( action.type ) {
        case 'ADD_PRODUCT':
            return [...state, {id: genId(), name: action.productName, price: 99}];
        default:
            return state
    }
}
