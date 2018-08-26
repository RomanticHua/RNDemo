import {combineReducers} from 'redux';
import todos from './toDo';
import counter from './counter';
import  delayUpdateRedux from './DelayUpdate'

const RootReducers = combineReducers({
    todos,
    counter,
    delayUpdateRedux,

});
export default RootReducers;