// actions/counterActions.js
export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
  
  export const toggleVisible = () => {
    return {
      type: 'VISIBLE',
    };
  };
  
  export const warningAlert = () => {
    return {
      type: 'warning',
    };
  };
  
  export const successAlert = () => {
    return {
      type: 'success',
    };
  };
  