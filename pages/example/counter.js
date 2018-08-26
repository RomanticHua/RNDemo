import * as types from './ActionType';

const initialState = {
    num: 100,
};
export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.ADD_NUM:
            return Object.assign({}, state, {num: action.num});
        case types.REDUCE_NUM:
            return {...state, num: action.num};
        default:
            return state;

    }
}