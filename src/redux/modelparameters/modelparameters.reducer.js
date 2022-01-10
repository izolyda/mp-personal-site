import ModelparametersActionTypes from './modelparameters.types.js';

const INITIAL_STATE = {
	networkSelected: "universe_generator",
	seedSelected: 100,
	truncationSelected: 0.6,
	noiseSelected: 'none',
	class_idx: 0,

};

const modelparametersReducer = (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case ModelparametersActionTypes.SET_NETWORK:
			return {
				...state,
				networkSelected: action.payload
			};
		case ModelparametersActionTypes.SET_SEED:
			// console.log('asdfasdfasdfasd');
			// console.log(action.payload);
			return {
				...state,
				seedSelected: action.payload
			};
			// console.log(new_obj);
			// return new_obj;
		case ModelparametersActionTypes.SET_TRUNCATION:
			return {
				...state,
				truncationSelected: action.payload
			};
		case ModelparametersActionTypes.SET_NOISE:
			return {
				...state,
				noiseSelected: action.payload
			};


		default:
			return state;
	}
}

export default modelparametersReducer;