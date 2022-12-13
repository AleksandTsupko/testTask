import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { testReducer } from './testReducer';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

const reducers = combineReducers({
  test: testReducer,
});

export const store = createStore(reducers, composeEnhancers);
