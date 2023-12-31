
function getComputerChoice() {
    let elements = ["Axe", "Bow", "Wand"];
    return elements[Math.floor(Math.random() * elements.length)]

}

function playRound(playerSelect, cpuSelect) {

    switch (playerSelect) {
        case "Axe":
            if(cpuSelect === "Axe"){
                return respuesta = "Tie";
            };
            if (cpuSelect === "Bow") {
                return respuesta = "Lose";
            }
            if (cpuSelect === "Wand") {
                return respuesta = "Win";
            }
            break;
        case "Bow":
            if(cpuSelect === "Axe"){
                return respuesta = "Win";
            };
            if (cpuSelect === "Bow") {
                return respuesta = "Tie";
            }
            if (cpuSelect === "Wand") {
                return respuesta = "Lose";
            }
            break;

        case "Wand":
            if(cpuSelect === "Axe"){
                return respuesta = "Lose";
            };
            if (cpuSelect === "Bow") {
                return respuesta = "Win";
            }
            if (cpuSelect === "Wand") {
                return respuesta = "Tie";
            }            
            break;
    }
    
    
}

let playerScore = 0;
let cpuScore = 0;

function game(weapon) {
    let cpuSelect = getComputerChoice();
    let playerSelect = weapon;

    let resultado = playRound(playerSelect, cpuSelect);

    document.getElementById('resultado').innerHTML = resultado;

    switch (resultado) {
        case 'Win':
            playerScore++;
            document.getElementById('player').innerHTML = playerScore;
            break;
        case 'Lose':
            cpuScore++;
            document.getElementById('cpu').innerHTML = cpuScore;
            break;
    }
}



