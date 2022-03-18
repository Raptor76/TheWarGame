let PV = 10;

function play() {
    let rules = document.getElementById('rules');
    let game = document.getElementById('game');
    let valider = document.createElement('input');
    let joueur1 = "Joueur 1";
    let joueur2 = "Joueur 2";
    let name1 = "name1";
    let name2 = "name2";
    let label1 = "label1";
    let label2 = "label2";


    game.removeChild(rules);
    game.setAttribute('class', 'game-player');

    createForm(game, joueur1, name1, label1);
    createForm(game, joueur2, name2, label2);

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
    let player1 = document.getElementById('name1').value;
    let player2 = document.getElementById('name2').value;
    let header = document.getElementById('header');
    let game = document.getElementById('game');
    let divName = document.getElementsByClassName('name');
    let btn = document.getElementById('valid-btn');
    let attack = document.createElement('input');
    let defend = document.createElement('input');
    let health = document.createElement('input');
    let btnDiv = document.createElement('div');
    let pDiv = document.createElement('div');
    let p = document.createElement('p');

    pDiv.setAttribute('class', 'question-div');
    pDiv.setAttribute('id', 'question-div');
    game.appendChild(pDiv);

    let divP = document.getElementById('question-div');

    p.setAttribute('class', 'question');
    p.innerHTML = player1 + ", que veux-tu faire ?";
    divP.appendChild(p)

    btnDiv.setAttribute('class', 'choix');
    game.appendChild(btnDiv);

    attack.setAttribute('type', 'button');
    defend.setAttribute('type', 'button');
    health.setAttribute('type', 'button');

    attack.setAttribute('class', 'action');
    defend.setAttribute('class', 'action');
    health.setAttribute('class', 'action');

    attack.setAttribute('value','Attaquer');
    defend.setAttribute('value','Se Défendre');
    health.setAttribute('value','Se Soigner');

    btnDiv.appendChild(attack);
    btnDiv.appendChild(defend);
    btnDiv.appendChild(health);


    createPv(player1, header);
    createPv(player2, header);

    game.removeChild(divName[0]);
    game.removeChild(divName[0]);
    game.removeChild(btn);
    game.setAttribute('class', 'game-rule')

};

function createPv(playerName, header) {
    let name = document.createElement('p');
    let life = document.createElement('p');
    let container = document.createElement('div');

    container.setAttribute('class', 'playerInfo');

    name.setAttribute('class', 'player-name');
    name.innerHTML = playerName;

    life.setAttribute('class', 'player-pv');
    life.innerHTML = "PV : " + PV;

    header.appendChild(container);
    container.appendChild(name);
    container.appendChild(life);


};