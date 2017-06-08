import {createStore, applyMiddleware} from 'redux';
import { default as thunk } from 'redux-thunk';
//import createLogger from "redux-logger";
import rootReducer from './reducer/root_reducer';

//const logger = createLogger();

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;