
const cart = {
    items: [
        {id: '111', name: 'aa', price: 123, count: 12}
    ]
};

export function cartReducer(state = cart, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_PRODUCT_CART':
            let exist = false;
            const items = state.items.map((item) => {
                if (item.id === action.product.id) {
                    exist = true;
                    return {...item, count: item.count + 1}
                } else {
                    return item;
                }
            });
            if (!exist) {
                items.push({
                    ...action.product,
                    count: 1
                })
            }

            return {...state, items};
        case 'ADD_COUNT_ITEM':
            const oldItems = [...state.items];
            let position = oldItems.findIndex((item) => {
                return item.id === action.id
            });
            let oldItem = oldItems[position];
            oldItems.splice(position, 1, {...oldItem, count: oldItem.count + action.num});
            console.log(oldItems);
            return {...state, items: oldItems};
        case 'CLEAR_CART':
            return {...state, items: []}
        default:
            return state;
    }
}
