import ImagesActionTypes from './images.types.js';

export const setImage = image => ({
	type: ImagesActionTypes.SET_IMAGE,
	payload: image
});
