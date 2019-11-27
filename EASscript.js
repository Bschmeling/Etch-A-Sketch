const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');

//Create 16x16 grid
function newGrid(gridSize){
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;
    for (let i = 0; i < gridSize*gridSize ; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', function(e){changeColor(e)});
        grid.appendChild(cell);
    }
}

container.appendChild(grid);

//Change color to black on mouseover
function changeColor(event){
    event.currentTarget.style.backgroundColor='black';
}

function reset() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    });
    const userChoice = prompt("how many squares per side?");
    newGrid(userChoice);
    
}


newGrid(16);
