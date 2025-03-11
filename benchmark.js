// Dados pré-existentes para os grids
const maps = [
    { name: "Mapa 1", highscore: "", averageScore: "", tips: "" },
    { name: "Mapa 2", highscore: "", averageScore: "", tips: "" },
    { name: "Mapa 3", highscore: "", averageScore: "", tips: "" },
    { name: "Mapa 4", highscore: "", averageScore: "", tips: "" },
    { name: "Mapa 5", highscore: "", averageScore: "", tips: "" }
];

// Função para criar os grids pré-existentes
function createGrids() {
    // Selecionar o container de grids
    let container = document.getElementById("gridsContainer");

    // Criar um grid para cada mapa
    maps.forEach((map, index) => {
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
                    gridItem.innerHTML = `<strong>Nome do Mapa</strong><br><input type="text" value="${map.name}" readonly>`;
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
                    gridItem.innerHTML = `<strong>Ações</strong><br><button onclick="saveData(${index})">Salvar</button>`;
                    break;
            }

            // Adicionar o grid ao container
            grid.appendChild(gridItem);
        }

        // Adicionar o grid ao container principal
        container.appendChild(grid);
    });
}

// Função para salvar os dados (exemplo)
function saveData(index) {
    let grid = document.querySelectorAll(".grid-container")[index];
    let highscore = grid.querySelector("input[type='number']:nth-of-type(1)").value;
    let averageScore = grid.querySelector("input[type='number']:nth-of-type(2)").value;
    let tips = grid.querySelector("textarea").value;

    // Exibir os dados salvos no console (ou enviar para um servidor)
    console.log(`Dados salvos para o mapa ${index + 1}:`);
    console.log(`Highscore: ${highscore}`);
    console.log(`Average Score: ${averageScore}`);
    console.log(`Dicas: ${tips}`);
}

// Criar os grids ao carregar a página
window.onload = createGrids;
