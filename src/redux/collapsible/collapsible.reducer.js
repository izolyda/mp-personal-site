import CollapsibleActionTypes from './collapsible.types.js';

const INITIAL_STATE = {
    expandedLeft: true,
    expandedRight: true
};

const collapsibleReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CollapsibleActionTypes.EXPAND_LEFT:
            return {
               // returning a copy of original state
                ...state, //copying the original state
                expandedLeft: action.payload
            };
        case CollapsibleActionTypes.EXPAND_RIGHT:
            return {
                // returning a copy of original state
                ...state, //copying the original state
                expandedRight: action.payload
            };


        default:
            return state;
    }
}

export default collapsibleReducer;