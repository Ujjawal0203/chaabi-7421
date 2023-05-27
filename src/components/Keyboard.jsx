import React from 'react';
import { useSelector } from 'react-redux';

const Keyboard = ({ onKeyPress }) => {
  const keys = 'asdfjkl;';

  return (
    <div className="Keyboard">
      {keys.split('').map((key, index) => (
        <button key={index} onClick={() => onKeyPress(key)}>
           {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
