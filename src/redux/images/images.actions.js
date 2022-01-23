import ImagesActionTypes from './images.types.js';

export const setImage = image => ({
	type: ImagesActionTypes.SET_IMAGE,
	payload: image
});

export const setCurrentImage = image => ({
	type: ImagesActionTypes.SET_CURRENT_IMAGE,
	payload: image
});

export const invokeImageEditor = imageEditor => ({
	type: ImagesActionTypes.INVOKE_IMAGE_EDITOR,
	payload: imageEditor
});

export const invokeImagePreview = imagePreview => ({
	type: ImagesActionTypes.INVOKE_IMAGE_PREVIEW,
	payload: imagePreview
});

export const setCurrentIndex = currentIdx => ({
	type: ImagesActionTypes.SET_CURRENT_IDX,
	payload: currentIdx
});
