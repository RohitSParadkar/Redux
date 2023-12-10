// components/InputComponent.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addAmount,subtractAmount } from '../Redux/actions/counterActions';

const InputComponent = ({ amount, addAmount, subtractAmount }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    const amountToAdd = parseFloat(inputValue);
    if (!isNaN(amountToAdd)) {
      addAmount(amountToAdd);
    }
  };

  const handleSubtract = () => {
    const amountToSubtract = parseFloat(inputValue);
    if (!isNaN(amountToSubtract)) {
      subtractAmount(amountToSubtract);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <p>Current Amount: {amount}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  amount: state.cartMaintain.amount, // Assuming 'amount' is stored under 'cartMaintain' slice
});

const mapDispatchToProps = {
  addAmount,
  subtractAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
