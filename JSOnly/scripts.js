let board = ['', '', '', '', '', '', '', '', '']; 
let currentPlayer = 'X'; 
let gameActive = true; 

const statusDisplay = document.querySelector('.message h2');

function handleCellPlayed(clickedCell, clickedCellIndex) {
    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
}

function handlePlayerChange() {
    if(currentPlayer==='X'){
       currentPlayer='O';
    }
    else{
       currentPlayer='X';
    }
  
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusDisplay.textContent = `Jugador  ${currentPlayer} ha ganado!`;
        document.querySelector('.message').style.display = 'flex'; 
        gameActive = false; 
        return;
    }

    const roundDraw = !board.includes('');
    if (roundDraw) {
        statusDisplay.textContent = 'Empate!';
        document.querySelector('.message').style.display = 'flex';
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index')); 
    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    checkWinner();
}


function handleRestartGame() {
    board = ['', '', '', '', '', '', '', '', '']; 
    gameActive = true;
    document.querySelectorAll('td').forEach(cell => cell.textContent = ''); // Limpiar celdas
    document.querySelector('.message').style.display = 'none'; // Ocultar mensaje de victoria
    currentPlayer = 'X'; 
}
document.querySelectorAll('td').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('button').addEventListener('click', handleRestartGame);
