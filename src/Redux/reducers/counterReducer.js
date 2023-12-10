// reducers/counterReducer.js
const initialState = {
    count: 12,
    visible: true,
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export const visibleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'VISIBLE':
        return { ...state, visible: !state.visible };
      default:
        return state;
    }
  };
  