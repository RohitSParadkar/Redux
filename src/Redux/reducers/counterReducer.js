// reducers/counterReducer.js
const counterInitialState = {
    count: 12,
  };
  
  export const counterReducer = (state = counterInitialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  const visibleInitialState = {
    visible: true,
  };
  
  export const visibleReducer = (state = visibleInitialState, action) => {
    switch (action.type) {
      case 'VISIBLE':
        return { ...state, visible: !state.visible };
      default:
        return state;
    }
  };
  
  const alertInitialState = {
    alert: 'success',
  };
  
  export const alertReducer = (state = alertInitialState, action) => {
    switch (action.type) {
      case 'WARNING_ALERT':
        return { ...state, alert: 'Your form has been submitted successfully' };
      case 'SUCCESS_ALERT':
        return { ...state, alert: 'Incorrect ID or password' };
      default:
        return state;
    }
  };
  
  const initialState = {
    amount: 0,
  };
  
  export const payloadReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_AMOUNT':
        return { ...state, amount: state.amount + action.payload };
      case 'SUBTRACT_AMOUNT':
        return { ...state, amount: state.amount - action.payload };
      default:
        return state;
    }
  };
  