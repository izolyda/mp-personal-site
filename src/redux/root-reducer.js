import {combineReducers} from 'redux';
import modelparametersReducer from './modelparameters/modelparameters.reducer.js';
import imagesReducer from './images/images.reducer.js';


export default combineReducers({
	modelparameters:  modelparametersReducer,
	image: imagesReducer,

});

