import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import home from './home';
import upload from './upload';

const rootReducer = combineReducers({
  home,
  upload
});

export default createStore(rootReducer, applyMiddleware(thunk));

