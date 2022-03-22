let PV1 = 10;
let PV2 = 10;
let playerNom

function play() {
    let rules = document.getElementById('rules');
    let game = document.getElementById('game');
    let valider = document.createElement('input');

    game.removeChild(rules);
    game.setAttribute('class', 'game-player');

    createForm(game, "Joueur", "name1", "label1");

    valider.setAttribute('type', 'button');
    valider.setAttribute('value', 'Valider');
    valider.setAttribute('id', 'valid-btn');
    valider.setAttribute('onclick', 'valid()');

    game.appendChild(valider);


};


function createForm(game, player, idName, idLabel) {
    let container = document.createElement('div');
    let name = document.createElement('input');
    let label = document.createElement('label');

    container.setAttribute('class', 'name');

    name.setAttribute('name', idName);
    name.setAttribute('placeholder', 'Nom du ' + player);
    name.setAttribute('id', idName);

    label.setAttribute('for', idName);
    label.setAttribute('id', idLabel);
    label.innerHTML = player;

    game.appendChild(container);
    container.appendChild(label);
    container.appendChild(name);
};

function valid() {
    playerNom = document.getElementById('name1').value;
    let player2 = "Ordi";
    let header = document.getElementById('header');
    let game = document.getElementById('game');
    let divName = document.getElementsByClassName('name');
    let btn = document.getElementById('valid-btn');
    // let attack = document.createElement('input');
    // let defend = document.createElement('input');
    // let health = document.createElement('input');
    // let btnDiv = document.createElement('div');
    let pDiv = document.createElement('div');
    let p = document.createElement('p');

    pDiv.setAttribute('class', 'question-div');
    pDiv.setAttribute('id', 'question-div');
    game.appendChild(pDiv);

    let divP = document.getElementById('question-div');

    p.setAttribute('class', 'question');
    p.setAttribute('id', 'question');
    // p.innerHTML = player1 + ", que veux-tu faire ?";
    divP.appendChild(p)


    // btnDiv.setAttribute('class', 'choix');
    // btnDiv.setAttribute('id', 'choix');
    // game.appendChild(btnDiv);

    // attack.setAttribute('type', 'button');
    // defend.setAttribute('type', 'button');
    // health.setAttribute('type', 'button');

    // attack.setAttribute('class', 'action');
    // defend.setAttribute('class', 'action');
    // health.setAttribute('class', 'action');

    // attack.setAttribute('onclick', 'action(this)');
    // defend.setAttribute('onclick', 'action(this)');
    // health.setAttribute('onclick', 'action(this)');

    // attack.setAttribute('value','Attaquer');
    // defend.setAttribute('value','Se Défendre');
    // health.setAttribute('value','Se Soigner');

    // btnDiv.appendChild(attack);
    // btnDiv.appendChild(defend);
    // btnDiv.appendChild(health);

    jeu();
    createPv(playerNom, "player-life", header);
    createPv(player2, "ia-life", header);

    game.removeChild(divName[0]);
    game.removeChild(btn);
    game.setAttribute('class', 'game-rule')


};

function createPv(playerName, id, header) {
    let name = document.createElement('p');
    let life = document.createElement('p');
    let container = document.createElement('div');

    container.setAttribute('class', 'playerInfo');

    name.setAttribute('class', 'player-name');
    name.innerHTML = playerName;

    life.setAttribute('class', 'player-pv');
    life.setAttribute('id', id);
    life.innerHTML = "PV : " + PV1;

    header.appendChild(container);
    container.appendChild(name);
    container.appendChild(life);


};

function action(btn) {
    let ia = Math.floor(Math.random() * 3); //0-Attaquer 1-Defendre 2-Soin
    let playerLife = document.getElementById('player-life');
    let iaLife = document.getElementById('ia-life');

    if (btn.value == "Attaquer") {
        if (ia == 0) {
            PV1 -= 3;
            PV2 -= 3;
            if (PV1 > 10) { PV1 = 10 };
            if (PV2 > 10) { PV2 = 10 };
            playerLife.innerHTML = "PV : " + PV1;
            iaLife.innerHTML = "PV : " + PV2;
            aJoue(btn.value, "Attaquer");


        } else if (ia == 1) {
            PV2 -= 1;
            if (PV2 > 10) { PV2 = 10 };
            iaLife.innerHTML = "PV : " + PV2;
            aJoue(btn.value, "La Défense");


        } else {
            aJoue(btn.value, "Soigner");

        }
    } else if (btn.value == "Se Défendre") {
        if (ia == 0) {
            PV1 -= 1;
            if (PV1 > 10) { PV1 = 10 };
            playerLife.innerHTML = "PV : " + PV1;
            aJoue(btn.value, "Attaquer");


        } else if (ia == 1) {
            aJoue(btn.value, "Se défendre");

        } else {
            PV2 += 3;
            if (PV2 > 10) { PV2 = 10 };
            iaLife.innerHTML = "PV : " + PV2;
            aJoue(btn.value, "Se Soigner");
        }
    } else if (btn.value == "Se Soigner") {
        if (ia == 0) {
            aJoue(btn.value, "Attaquer");

        } else if (ia == 1) {
            PV1 += 3;
            if (PV1 > 10) { PV1 = 10 };
            playerLife.innerHTML = "PV : " + PV1;
            aJoue(btn.value, "Se Défendre");

        } else {
            PV1 += 3;
            PV2 += 3;
            if (PV1 > 10) { PV1 = 10 };
            if (PV2 > 10) { PV2 = 10 };
            playerLife.innerHTML = "PV : " + PV1;
            iaLife.innerHTML = "PV : " + PV2;
            aJoue(btn.value, "Se Soigner");

        }
    }
    // console.log(ia, "et btn = ", btn.value);
}

function aJoue(playerAction, iaAction) {
    let game = document.getElementById('game');
    let btn = document.getElementById('choix');
    let question = document.getElementById('question');

    game.removeChild(btn);

    if (PV1 < 1){
        question.innerHTML = "Tu as perdu ! "
    } else if (PV2 < 1){
        question.innerHTML = "Tu as gagné ! "
    } else{
    question.innerHTML = "Ton action : " + playerAction + "<br/> L'Action de l'ordi : " + iaAction
    const timeout = setTimeout(jeu, 3000);
    }

}

function jeu() {
    let attack = document.createElement('input');
    let defend = document.createElement('input');
    let health = document.createElement('input');
    let btnDiv = document.createElement('div');
    let question = document.getElementById('question');

    question.innerHTML = playerNom + ", que veux-tu faire ?";

    btnDiv.setAttribute('class', 'choix');
    btnDiv.setAttribute('id', 'choix');
    game.appendChild(btnDiv);

    attack.setAttribute('type', 'button');
    defend.setAttribute('type', 'button');
    health.setAttribute('type', 'button');

    attack.setAttribute('class', 'action');
    defend.setAttribute('class', 'action');
    health.setAttribute('class', 'action');

    attack.setAttribute('onclick', 'action(this)');
    defend.setAttribute('onclick', 'action(this)');
    health.setAttribute('onclick', 'action(this)');

    attack.setAttribute('value', 'Attaquer');
    defend.setAttribute('value', 'Se Défendre');
    health.setAttribute('value', 'Se Soigner');

    btnDiv.appendChild(attack);
    btnDiv.appendChild(defend);
    btnDiv.appendChild(health);
}