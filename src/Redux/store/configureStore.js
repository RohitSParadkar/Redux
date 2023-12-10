// store.js
import { createStore, combineReducers } from 'redux';
import { counterReducer, visibleReducer, alertReducer } from '../reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  visible: visibleReducer,
  alert: alertReducer,
});

const store = createStore(rootReducer);

export default store;
