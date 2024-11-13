// Grid.js
import React from 'react';

const Grid = ({ grid, onChange }) => {
  return (
    <div className="container">
        <div className="sudoku-grid">
        {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
            <input
                key={`${rowIndex}-${colIndex}`}
                type="number"
                min="1"
                max="9"
                value={cell || ""}
                onChange={(e) => onChange(e, rowIndex, colIndex)}
                className="sudoku-cell"
            />
            ))
        )}
        </div>
    </div>
  );
};

export default Grid;
