import {combineReducers} from 'redux'; 
import inviteReducer from './inviteReducer.js';
console.log(inviteReducer)
const rootReducer = combineReducers({
	invite: inviteReducer
});

export default rootReducer;