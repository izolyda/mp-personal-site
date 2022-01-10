import ModelparametersActionTypes from './modelparameters.types.js';

export const setNetwork = network => ({
	type: ModelparametersActionTypes.SET_NETWORK,
	payload: network
});
export const setSeed = seed => ({
	type: ModelparametersActionTypes.SET_SEED,
	payload: seed
});
export const setTruncation = truncation => ({
	type: ModelparametersActionTypes.SET_TRUNCATION,
	payload: truncation
});
export const setNoise = noise => ({
	type: ModelparametersActionTypes.SET_NOISE,
	payload: noise
});


