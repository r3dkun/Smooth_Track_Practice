// Função para adicionar um novo grid
function addGrid() {
    // Selecionar o container de grids
    let container = document.getElementById("gridsContainer");

    // Criar um novo grid
    let grid = document.createElement("div");
    grid.classList.add("grid-container");

    // Adicionar os 5 grids internos
    for (let i = 0; i < 5; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // Adicionar conteúdo específico para cada grid
        switch (i) {
            case 0:
                gridItem.innerHTML = `<strong>Nome do Mapa</strong><br><input type="text" placeholder="Digite o nome do mapa">`;
                break;
            case 1:
                gridItem.innerHTML = `<strong>Highscore do Usuário</strong><br><input type="number" placeholder="Digite o highscore">`;
                break;
            case 2:
                gridItem.innerHTML = `<strong>Average Score do Usuário</strong><br><input type="number" placeholder="Digite o average score">`;
                break;
            case 3:
                gridItem.innerHTML = `<strong>Dicas para o Usuário</strong><br><textarea placeholder="Digite dicas"></textarea>`;
                break;
            case 4:
                gridItem.innerHTML = `<strong>Ações</strong><br><button onclick="removeGrid(this)">Remover</button>`;
                break;
        }

        // Adicionar o grid ao container
        grid.appendChild(gridItem);
    }

    // Adicionar o grid ao container principal
    container.appendChild(grid);
}

// Função para remover um grid
function removeGrid(button) {
    let grid = button.closest(".grid-container");
    grid.remove();
}
