import ImagesActionTypes from './images.types.js';

const INITIAL_STATE = {
	images: [],
	currentImage: null,
	currentIdx: null,
	imageEditor: false,
	imagePreview: true,
};

const imagesReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case ImagesActionTypes.SET_IMAGE:
			return {
				// ...state,
				// images: action.payload

				 // returning a copy of original state
   				...state, //copying the original state
   				images: [action.payload, ...state.images] //prepend: new todos array 
			};
		case ImagesActionTypes.SET_CURRENT_IMAGE:
			return {
				// returning a copy of original state
				...state, //copying the original state
				currentImage: action.payload//prepend: new todos array
			};
		case ImagesActionTypes.INVOKE_IMAGE_EDITOR:
			return {
				// returning a copy of original state
				...state, //copying the original state
				imageEditor: action.payload //prepend: new todos array
			};
		case ImagesActionTypes.INVOKE_IMAGE_PREVIEW:
			return {
				// returning a copy of original state
				...state, //copying the original state
				imagePreview: action.payload //prepend: new todos array
			};
		case ImagesActionTypes.SET_CURRENT_IDX:
			return {
				// returning a copy of original state
				...state, //copying the original state
				currentIdx: action.payload //prepend: new todos array
			};
		

		default:
			return state;
	}
}

export default imagesReducer;