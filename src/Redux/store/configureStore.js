// store.js
import { createStore, combineReducers } from 'redux';
import { counterReducer,visibleReducer } from '../reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  visible: visibleReducer,
});

const store = createStore(rootReducer);

export default store;
