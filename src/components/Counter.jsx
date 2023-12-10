// components/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, toggleVisible } from '../Redux/actions/counterActions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const isVisible = useSelector((state) => state.visible.visible);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h1>Visible: {isVisible.toString()}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(toggleVisible())}>Toggle Visibility</button>
    </div>
  );
};

export default Counter;
