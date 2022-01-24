import {combineReducers} from 'redux';
import modelparametersReducer from './modelparameters/modelparameters.reducer.js';
import imagesReducer from './images/images.reducer.js';
import collapsibleReducer from './collapsible/collapsible.reducer.js';
import networkmetaReducer from "./networkmeta/networkmetareducer";

export default combineReducers({
	modelparameters:  modelparametersReducer,
	image: imagesReducer,
	collapsible: collapsibleReducer,
	networkmeta: networkmetaReducer,
});

