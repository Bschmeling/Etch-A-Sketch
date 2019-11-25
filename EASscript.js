const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');

    for (let i = 0; i < 256; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }

container.appendChild(grid);
