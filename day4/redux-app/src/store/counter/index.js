export function counterReducer(state = 0, action) {
    switch( action.type ) {
        case 'INCREMENT':
            return state + action.payLoad;
        case 'DECREMENT':
            return state - action.payLoad;
        default:
            return state;
    }
}
