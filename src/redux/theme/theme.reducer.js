import ThemeActionTypes from "../theme/theme.types";

const INITIAL_STATE = {
    lite: false,
};


const themeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ThemeActionTypes.SET_LITE:
            return {
                // ...state,
                // images: action.payload

                // returning a copy of original state
                ...state, //copying the original state
                lite: action.payload,
            };
        case ThemeActionTypes.SET_DARK:
            return {
                // returning a copy of original state
                ...state, //copying the original state
                lite: action.payload,
            };


        default:
            return state;
    }
}

export default themeReducer;