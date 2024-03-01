let score = 0;
let clickvalue = 0;
let upgradeCost = 10;
let clickCount = 0;

function updateScore() {
    score += clickvalue;
    document.getElementById('score').textContent = score;
    checkEndGame(); 
}

function changePlanet() {
    const planet = document.getElementById('planet');
    if (clickCount === 50) {
        alert('OHHHH, Algo no seu mundo mudou!!')
        planet.style.backgroundImage = "url('/scr/assets/WorldEvolved.png')"; // evolved
    }
}

function changePlanet2() {
    const planet = document.getElementById('planet');
    if (clickCount >= 100) {
        planet.style.backgroundImage = "url('/scr/assets/WorldSemiEvolved.png"; // imagem final
        alert('Seu mundo Atingiu o nivel maximo😨');
    }
}

function checkEndGame() {
    if (score >= 100) {
        document.getElementById('planet').removeEventListener('click', planetClickHandler); // desativa os eventos
        document.getElementById('upgradeButton').removeEventListener('click', upgradeButtonClickHandler); // desativa os eventos
    }
}

function planetClickHandler() {
    score += 1;
    clickCount++;
    updateScore();                  
    changePlanet();
    changePlanet2()
}

function upgradeButtonClickHandler() {
    if (score >= upgradeCost) {
        clickvalue +=1
        score -= upgradeCost;
        upgradeCost *= 2;
        updateScore();
        document.getElementById('upgradeCost').textContent = upgradeCost;
        document.getElementById('upgradeButton').style.backgroundColor = 'lightgreen';
        setTimeout(() => {
            document.getElementById('upgradeButton').style.backgroundColor = '';
        }, 200);
    } else {
        alert("Você não tem pontos suficientes para comprar o upgrade!");
    }
}

document.getElementById('planet').addEventListener('click', planetClickHandler);
document.getElementById('upgradeButton').addEventListener('click', upgradeButtonClickHandler);
