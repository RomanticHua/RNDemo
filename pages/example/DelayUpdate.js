import * as types from './ActionType';

const initialState = {
    delay: '延时更新初始值',
};
export default function delayUpdateRedux(state = initialState, action) {
    switch (action.type) {
        case types.DELAY_UPDATE:
            return {...state, delay: action.text};
        default:
            return state;
    }

}