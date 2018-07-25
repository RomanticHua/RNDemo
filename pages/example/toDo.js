import * as types from './ActionType';

const initialState = {
    text: '',
};
export default function todos(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_TEXT:
            state.text = action.text;
            return Object.assign({}, state);

        default:
            return Object.assign({}, state);

    }
}