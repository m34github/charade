import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth';
import home from './home';
import upload from './upload';

const rootReducer = combineReducers({
  auth,
  home,
  upload
});

export default createStore(rootReducer, applyMiddleware(thunk));

