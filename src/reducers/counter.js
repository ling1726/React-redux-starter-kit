import * as types from '../actions/types';

const initialState = {value: 0};

export default function reducers(state = initialState, action){
    switch (action.type){
        case types.COUNTER_INCREMENT_REQUEST:
            return { ...state};
        case types.COUNTER_INCREMENT_FAILED:
            return {...state};
        case types.COUNTER_INCREMENT_SUCCESS:
            let newValue = state.value + 1;
            return {...state, value: newValue};
        default:
            return {...state};
    }
}
