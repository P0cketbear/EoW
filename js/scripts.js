
function getComputerChoice() {
    let elements = ["Axe", "Bow", "Wand"];
    return elements[Math.floor(Math.random() * elements.length)]

}

function playRound(playerSelect, cpuSelect) {

    let respuesta = "";
    switch (playerSelect) {
        case "Axe":
            if(cpuSelect === "Axe"){
                return result = "Tie";
            };
            if (cpuSelect === "Bow") {
                return result = "Lose";
            }
            if (cpuSelect === "Wand") {
                return result = "Win";
            }
            break;
        case "Bow":
            if(cpuSelect === "Axe"){
                return result = "Win";
            };
            if (cpuSelect === "Bow") {
                return result = "Tie";
            }
            if (cpuSelect === "Wand") {
                return result = "Lose";
            }
            break;

        case "Wand":
            if(cpuSelect === "Axe"){
                return result = "Lose";
            };
            if (cpuSelect === "Bow") {
                return result = "Win";
            }
            if (cpuSelect === "Wand") {
                return result = "Tie";
            }            
            break;
    }
    
    
}


let cpuSelect = getComputerChoice();
let playerSelect = "Axe"

alert(playRound(playerSelect, cpuSelect))