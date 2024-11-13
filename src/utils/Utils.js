// Utils.js
export const isValid = (grid) => {
    // Check rows, columns, and 3x3 sub-grids for unique values
    const checkUnique = (arr) => new Set(arr.filter(Boolean)).size === arr.filter(Boolean).length;
  
    // Row and Column validation
    for (let i = 0; i < 9; i++) {
      if (!checkUnique(grid[i]) || !checkUnique(grid.map(row => row[i]))) return false;
    }
  
    // Sub-grid validation
    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
        const subGrid = [];
        for (let r = row; r < row + 3; r++) {
          for (let c = col; c < col + 3; c++) {
            subGrid.push(grid[r][c]);
          }
        }
        if (!checkUnique(subGrid)) return false;
      }
    }
    return true;
  };
  
  export const solveSudoku = (grid) => {
    const findEmpty = () => {
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (!grid[r][c]) return [r, c];
        }
      }
      return null;
    };
  
    const canPlace = (num, row, col) => {
      for (let i = 0; i < 9; i++) {
        if (grid[row][i] === num || grid[i][col] === num) return false;
      }
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
          if (grid[r][c] === num) return false;
        }
      }
      return true;
    };
  
    const solve = () => {
      const emptyCell = findEmpty();
      if (!emptyCell) return true;
      const [row, col] = emptyCell;
      for (let num = 1; num <= 9; num++) {
        if (canPlace(num, row, col)) {
          grid[row][col] = num;
          if (solve()) return grid;
          grid[row][col] = null;
        }
      }
      return false;
    };
  
    const solved = solve();
    return solved ? grid : null;
  };
  