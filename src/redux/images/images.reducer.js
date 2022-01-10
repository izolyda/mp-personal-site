import ImagesActionTypes from './images.types.js';

const INITIAL_STATE = {
	images: [],

};

const imagesReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case ImagesActionTypes.SET_IMAGE:
			return {
				// ...state,
				// images: action.payload

				 // returning a copy of orignal state 
   				...state, //copying the original state
   				images: [action.payload, ...state.images] //prepend: new todos array 
			};
		

		default:
			return state;
	}
}

export default imagesReducer;