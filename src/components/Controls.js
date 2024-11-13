// Controls.js
import React from 'react';

const Controls = ({ onValidate, onSolve }) => (
  <div className="controls">
    <button className="solveButton" onClick={onValidate}>Validate</button>
    <button className="solveButton" onClick={onSolve}>Solve</button>
  </div>
);

export default Controls;
