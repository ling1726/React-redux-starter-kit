import {combineReducers} from 'redux';
import counter from './counter';


// COMBINE REDUCERS
// the key is the name of the state object (i.e. state.<objKey>)

const rootReducer = combineReducers({
    counter
});

export default rootReducer;
