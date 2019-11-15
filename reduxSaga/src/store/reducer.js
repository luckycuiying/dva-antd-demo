import * as types from './action-types';
let initailState ={
    number:0
}
export default function(state=initailState,action){
    switch (action.type) {
        case types.ADD:
            return{ ...state,number:state.number+1}
    
        default:
            return state
    }
}