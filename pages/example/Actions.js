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
