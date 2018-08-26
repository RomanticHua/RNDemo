import * as types from './ActionType';

export function addTodo(num) {
    return {
        type: types.ADD_NUM,
        num: num
    }
}

export function reduceTodo(num) {
    return {
        type: types.REDUCE_NUM,
        num: num
    }
}

export function updateText(text) {
    return {
        type: types.UPDATE_TEXT,
        text: text
    }
}

export function delay(text) {
    return {
        type: types.DELAY_UPDATE,
        text: text
    }
}

/**
 * 延时2秒去一个更新状态,利用redux-thunk中间件去实现,thunk可以不返回一个action,而是返回一个dispatch,getState为参数的函数.
 * @returns {Function}
 */
export function delayUpdateAction(text) {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(delay(text))
        }, 2000);
    }
}

export function delayAdd(num) {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(addTodo(num))
        }, 2000);
    }
}
