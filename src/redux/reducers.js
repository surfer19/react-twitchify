import { combineReducers } from 'redux';

import streamListReducer from "./StreamListReducer";

const rootReducer = combineReducers({
	streamListReducer
});

export default rootReducer;