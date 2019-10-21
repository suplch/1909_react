import {fromJS, Map} from 'immutable';

const initState = fromJS({
    login_ok: false,
    login_error: '',
    user: {
        user_id: '',
        user_name: ''
    }
});

export function loginReducer(state = initState, action) {
    switch (action.type) {
        case 'LOGIN':
            console.log("LOGIN");
            const {status, data, msg} = action.payload;
            if (status === 10000) {
                return state.set('login_ok', true).set('login_error', '').update('user', function (user) {
                    return user.set('user_id', data.user.user_id).set('user_name', data.user.user_name);
                })
            } else {
                return state.set('login_error', msg)
            }
        default:
            return state;
    }
}
