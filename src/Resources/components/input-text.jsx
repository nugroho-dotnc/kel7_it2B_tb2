import React from 'react';
import '../style/component.css';
const InputText = ({ id, placeholder }) => {
  return (
    <div className="input-container">
      <input type="text" id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputText;
