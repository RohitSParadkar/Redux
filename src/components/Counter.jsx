// components/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, toggleVisible, warningAlert, successAlert } from '../Redux/actions/counterActions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const isVisible = useSelector((state) => state.visible.visible);
  const alert = useSelector((state) => state.alert.alert);
  const dispatch = useDispatch();
  console.log(isVisible)
  return (
    <div>
      <h2>Counter: {count}</h2>
      <h1>Visible: {isVisible.toString()}</h1>
      <button onClick={() => { dispatch(increment()); dispatch(successAlert()); }}>Increment</button>
      <button onClick={() => { dispatch(decrement()); dispatch(warningAlert()); }}>Decrement</button>
      <button onClick={() => dispatch(toggleVisible())}>Toggle Visibility</button>
      {alert && <p>{alert}</p>}
    </div>
  );
};

export default Counter;
