// store.js
import { createStore, combineReducers } from 'redux';
import { counterReducer, visibleReducer, alertReducer,payloadReducer } from '../reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  visible: visibleReducer,
  alert: alertReducer,
  cartMaintain:payloadReducer
});

const store = createStore(rootReducer);

export default store;
