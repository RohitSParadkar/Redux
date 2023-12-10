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
      case 'warning':
        return { ...state, alert: 'Your form has been submitted successfully' };
      case 'success':
        return { ...state, alert: 'Incorrect ID or password' };
      default:
        return state;
    }
  };
  