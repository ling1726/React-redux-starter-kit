import * as types from './types';

export function increment(){
	return dispatch =>{
        dispatch({type: types.COUNTER_INCREMENT_REQUEST});
        dispatch({type: types.COUNTER_INCREMENT_SUCCESS});
	}	
}
