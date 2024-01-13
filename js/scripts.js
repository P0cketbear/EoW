
function getComputerChoice() {
    let elements = ["Axe", "Bow", "Wand"];
    return elements[Math.floor(Math.random() * elements.length)]

}

function playRound(playerSelect, cpuSelect) {

    switch (playerSelect) {
        case "Axe":
            if (cpuSelect === "Axe") {
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
            if (cpuSelect === "Axe") {
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
            if (cpuSelect === "Axe") {
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


// Buttons

const axebtn = document.querySelector('#axe-btn');
axebtn.addEventListener('click', () => game('Axe'));
const wandbtn = document.querySelector('#wand-btn');
wandbtn.addEventListener('click', () => game('Wand'));
const bowbtn = document.querySelector('#bow-btn');
bowbtn.addEventListener('click', () => game('Bow'));


// Game

let playerScore = 0;
let cpuScore = 0;

function game(weapon) {

    let cpuWeapon = getComputerChoice();

    showPicks(weapon, cpuWeapon);

    let resultado = playRound(weapon, cpuWeapon);

    switch (resultado) {
        case 'Win':
            playerScore++;

            document.querySelector('#resultado').style.color = 'green';
            document.querySelector('#resultado').textContent = 'You' + ' ' + resultado + ' this round.';

            document.querySelector('#cpu').style.color = 'white';

            document.querySelector('#player').style.color = 'green';
            document.querySelector('#player').textContent = playerScore;
            break;
        case 'Lose':
            cpuScore++;
            document.querySelector('#resultado').style.color = 'red';
            document.querySelector('#resultado').textContent = 'You' + ' ' + resultado + ' this round.';

            document.querySelector('#player').style.color = 'white';

            document.querySelector('#cpu').style.color = 'green';
            document.querySelector('#cpu').textContent = cpuScore;
            break;
        case 'Tie':
            document.querySelector('#resultado').style.color = 'white';
            document.querySelector('#cpu').style.color = 'white';
            document.querySelector('#player').style.color = 'white';
            document.querySelector('#resultado').textContent = 'It\'s a ' + resultado;
            break;
    }

    checkScore(playerScore, cpuScore);
}


function showPicks(playerWeapon, cpuWeapon) {


    const cWeapon = document.querySelector('#cpuWeapon');
    const pWeapon = document.querySelector('#playerWeapon');
    const pick1 = document.querySelector('#pick1');
    const pick2 = document.querySelector('#pick2');

    if (pick1 && pick2) {

        pick1.textContent = 'You picked ' + playerWeapon;
        pick2.textContent = 'CPU picked ' + cpuWeapon;

    } else {
        const newPicks = document.createElement('div');
        newPicks.classList.toggle('picks');
        newPicks.setAttribute('id', 'pick1')
        newPicks.textContent = 'You picked ' + playerWeapon;
        pWeapon.appendChild(newPicks);

        const newPicks2 = document.createElement('div');
        newPicks2.classList.toggle('picks');
        newPicks2.setAttribute('id', 'pick2');
        newPicks2.textContent = 'CPU picked ' + cpuWeapon;
        cWeapon.appendChild(newPicks2);
    }

}

function checkScore(playerScore, cpuScore) {

    const playA = document.createElement('button');
    playA.textContent = 'Play Again'


    if (playerScore === 5 || cpuScore === 5) {
        let won = false;
        if (playerScore === 5) {
            won = true;
            document.querySelector('#resultado').style.color = 'green';
            document.querySelector('#resultado').textContent = 'Player Wins the Game';

        } else {
            won = true;
            document.querySelector('#resultado').style.color = 'red';
            document.querySelector('#resultado').textContent = 'CPU Wins the Game';

        }

        if (won) {
            axebtn.disabled = true;
            wandbtn.disabled = true;
            bowbtn.disabled = true;
            document.querySelector('#resultado').appendChild(playA)
        }
        playA.addEventListener('click', () => location.reload())

    }

}
