// actions/counterActions.js
export const increment = () => ({
    type: 'INCREMENT',
  });
  
  export const decrement = () => ({
    type: 'DECREMENT',
  });
  
  export const toggleVisible = () => ({
    type: 'VISIBLE',
  });
  
  export const warningAlert = () => ({
    type: 'WARNING_ALERT',
  });
  
  export const successAlert = () => ({
    type: 'SUCCESS_ALERT',
  });
  
  export const addAmount = (amount) => ({
    type: 'ADD_AMOUNT',
    payload: amount,
  });
  
  export const subtractAmount = (amount) => ({
    type: 'SUBTRACT_AMOUNT',
    payload: amount,
  });
  