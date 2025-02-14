let board = ['', '', '', '', '', '', '', '', '']; // 9 empty cells
let currentPlayer = 'X'; // Starting with player X
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const restartBtn = document.getElementById('restartBtn');
const backBtn = document.getElementById('backBtn');
const messageBox = document.getElementById('messageBox');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedIndex = Array.from(cells).indexOf(clickedCell);

    if (board[clickedIndex] !== '' || !gameActive) return; // Cell is already filled or game over

    // Fill the cell with the current player's symbol (X or O)
    board[clickedIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Set text color based on the current player
    if (currentPlayer === 'X') {
        clickedCell.style.color = 'red';  // X in red color
    } else {
        clickedCell.style.color = ' rgb(255, 170, 0)';  // O in yellow color
    }

    // Check for a winner
    if (checkWinner()) {
        displayMessage(`${currentPlayer} Wins ! ! !`);
        gameActive = false;
        return;
    }

    // Check for a draw
    if (!board.includes('')) {
        displayMessage('It\'s a Draw ! !');
        gameActive = false;
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function displayMessage(message) {
    const gameMessage = document.getElementById('gameMessage');
    gameMessage.textContent = message;
    gameMessage.style.display = 'block';  // Show the message

    // Hide the message after 4 seconds
    setTimeout(() => {
        gameMessage.style.display = 'none';
    }, 4000);
}


function checkWinner() {
    // Define winning combinations (3 cells in a row, column, or diagonal)
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true; // There's a winner
        }
    }
    return false; // No winner yet
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', '']; // Reset board
    currentPlayer = 'X'; // Reset to player X
    gameActive = true;

    cells.forEach(cell => {
        cell.textContent = ''; // Clear all cells
    });
}

// Add event listeners to all cells
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Restart button
restartBtn.addEventListener('click', restartGame);

// Back button (displays confirmation message box)
backBtn.addEventListener('click', () => {
    messageBox.style.display = 'block'; // Show message box
});

// Yes button in message box (close the page)
yesBtn.addEventListener('click', () => {
    window.close(); // Close the window (note: this only works in some browsers or environments)
});

// No button in message box (close message box)
noBtn.addEventListener('click', () => {
    messageBox.style.display = 'none'; // Hide the message box
});
