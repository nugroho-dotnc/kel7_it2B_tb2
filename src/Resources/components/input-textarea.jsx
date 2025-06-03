import React from 'react';
import '../style/component.css';
const InputTextArea = ({ id, placeholder, rows = 4 }) => {
  return (
    <div className="input-container">
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows} // Allows you to control the initial visible rows
      ></textarea>
    </div>
  );
};

export default InputTextArea;