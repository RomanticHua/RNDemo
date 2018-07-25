import * as types from './ActionType';

const initialState = {
    num: 0,
};
export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.ADD_NUM:
            state.num = action.num;
            return Object.assign({}, state);
        case types.REDUCE_NUM:
            state.num = action.num;
            return Object.assign({}, state);
        default:
            return Object.assign({}, state);

    }
}