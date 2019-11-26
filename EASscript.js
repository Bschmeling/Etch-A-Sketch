const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');

const gridSize = 16;

//Create 16x16 grid
for (let i = 0; i < gridSize*gridSize ; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseenter', function(e){changeColor(e)});
    grid.appendChild(cell);
}

container.appendChild(grid);


function changeColor(event, mode){
    event.currentTarget.style.backgroundColor='black';
}
