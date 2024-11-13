// App.js
import React, { useState } from 'react';
import Grid from './components/Grid';
import Controls from './components/Controls';
import { isValid, solveSudoku } from './utils/Utils';
import './App.css';

const App = () => {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill(null)));
  const [error, setError] = useState(null);

  const handleChange = (e, row, col) => {
    const newGrid = grid.map(row => [...row]);
    newGrid[row][col] = e.target.value ? parseInt(e.target.value, 10) : null;
    setGrid(newGrid);
  };

  const handleValidate = () => {
    if (isValid(grid)) {
      setError(null);
      alert("The current Sudoku grid is valid!");
    } else {
      showError("Invalid Sudoku grid. Please fix the entries.");
      setTimeout(1000);
    }
  };

  const handleSolve = () => {
    if (isValid(grid)) {
      const solvedGrid = solveSudoku(grid);
      if (solvedGrid) {
        setGrid(solvedGrid);
        setError(null);
      } else {
        showError("This Sudoku puzzle is unsolvable.");
      }
    } else {
      showError("Invalid grid. Please validate the grid before solving.");
    }
  };

  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null); // Clear the error after 3 seconds
    }, 3000);
  };

  return (
    <div className="sudoku-app">
      <h1>Sudoku Solver</h1>
      <Grid grid={grid} onChange={handleChange} />
      <Controls onValidate={handleValidate} onSolve={handleSolve} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default App;
