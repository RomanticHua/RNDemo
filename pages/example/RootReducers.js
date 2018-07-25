import {combineReducers} from 'redux';
import todos from './toDo';
import counter from './counter';

const RootReducers = combineReducers({
    todos,
    counter,
});
export default RootReducers;