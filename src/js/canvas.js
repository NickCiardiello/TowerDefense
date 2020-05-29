import {
    canvas,
    mouse,
    pathElement,
    cashLbl,
    healthLbl,
    playBtn,
    mapDropdown,
    placeFngBtn,
    placeMarksmanBtn,
    placeGunsmithBtn,
    upgradeBtn,
    TowerType
} from './Constants';
import { getDistance } from './utils';
import { createEnemiesForRound, getReward } from './Rounds';
import { setMap } from "./Maps";
import { clear, drawPath, drawTowers, drawTowersFull, drawAttack } from "./Draw";
import {Fng} from "./towers/Fng";
import {Marksman} from "./towers/Marksman";
import {Gunsmith} from "./towers/Gunsmith";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Game Vars
let round = 1;
let cash = 150;
let health = 100;
let devMode = true;
if (devMode) {
    cash = 1000000;
    cashLbl.innerHTML = "$" + cash;
    health = 100000;
    healthLbl.innerHTML = "Health: " + health;
}
let selectedTower;
let towers = [];
let enemies = [];
let placing = false;
let running = false;

/*
Init
 */
clear();
setMap('');
checkAfford(cash);
drawPath();
playBtn.addEventListener ("click", run, false);
mapDropdown.addEventListener ("change", function() { setNewMap() }, false);
placeFngBtn.addEventListener ("click", function() { placeTower(TowerType.FNG) }, false);
placeMarksmanBtn.addEventListener ("click", function() { placeTower(TowerType.MARKSMAN) }, false);
placeGunsmithBtn.addEventListener ("click", function() { placeTower(TowerType.GUNSMITH) }, false);
upgradeBtn.addEventListener ("click", function() { upgrade() }, false);
canvas.addEventListener('click', function() {
    if (placing) {
        placing = false;
    } else {
        for (let i = 0; i < towers.length; i++) {
            if (getDistance(mouse.x, mouse.y, towers[i].x, towers[i].y) < towers[i].radius) {
                towers[i].isSelected = true;
                selectedTower = towers[i];
                checkUpgrade();
            } else {
                towers[i].isSelected = false;
            }
            clear();
            drawTowers(towers);
            drawPath();
        }

    }}, false);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && placing) {
        placing = false;
        cash += towers[towers.length - 1].price;
        towers.pop();
        drawTowers(towers);
        drawPath();
    }
}, false);

/*
Play round
 */
function run() {
    running = true;
    enemies = createEnemiesForRound(round);
    playRound();
}
function playRound() {
    clear();
    drawTowers(towers);
    drawPath();
    moveEnemies();
    attack();
    if (enemies.length === 0) {
        endRound();
    } else {
        requestAnimationFrame(playRound)
    }
}
function moveEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        let x = parseInt(pathElement.getPointAtLength(enemies[i].step).x);
        let y = parseInt(pathElement.getPointAtLength(enemies[i].step).y);
        enemies[i].update(x, y);
        enemies[i].move();

        // Check if enemy reached the end of the map
        if (enemies[i].step >= pathElement.getTotalLength()) {
            health -= enemies[i].damage;
            enemies.shift();
            healthLbl.innerHTML = "Health: " + health;
            if (health <= 0) {
                alert('Game Over');
            }
        }

        // Sort enemies in descending order by how far along they are on the map
        enemies.sort((a, b) => (b.step - a.step));
    }
}
function attack() {
    for (let i = 0; i < towers.length; i++) {
        let numTargets = towers[i].numTargets;
        for (let j = 0; j < enemies.length; j++) {
            if (towers[i].canHit(enemies[j])) {
            // if (getDistance(towers[i].x, towers[i].y, enemies[j].x, enemies[j].y) < towers[i].rangeRadius &&
            //     towers[i].canHit(enemies[j])) {
                // enemies[i].step >= 0 &&
                // (!enemies[i].camo || (enemies[i].camo && towers[i].detectCamo))) {
                drawAttack(towers[i].x, towers[i].y, enemies[j].x, enemies[j].y);
                // enemies[j].hit(towers[i].damage);
                towers[i].hit(enemies[i]);
                numTargets--;
                if (!enemies[j].alive) {
                    cash += enemies[j].damage;
                    cashLbl.innerHTML = "$" + cash;
                    enemies.splice(j, 1);
                }
                if (numTargets === 0) {
                    break;
                }
            }
        }
    }
}
function endRound() {
    running = false;
    cash += getReward(round);
    cashLbl.innerHTML = "$" + cash;
    checkAfford();
    round++;
    playBtn.innerHTML = "Play Round " + round;
    clear();
    drawTowers(towers);
    drawPath();
}

/*
Drag and drop tower
 */
function placeTower(towerType) {
    placing = true;
    let tower;
    switch (towerType) {
        case TowerType.FNG:
            // towers[towers.length] = new Fng(mouse.x, mouse.y);
            tower = new Fng(mouse.x, mouse.y);
            break;
        case TowerType.MARKSMAN:
            tower = new Marksman(mouse.x, mouse.y);
            break;
        case TowerType.GUNSMITH:
            tower = new Gunsmith(mouse.x, mouse.y);
    }
    towers[towers.length] = tower;
    cash -= towers[towers.length - 1].price;
    cashLbl.innerHTML = "Cash: $" + cash;
    checkAfford(cash);
    place();
}
function place() {
    clear();
    let tower = towers[towers.length - 1];
    if (placing) {
        requestAnimationFrame(place);
        tower.update(mouse.x, mouse.y);
        drawTowersFull(towers);
    } else {
        for (let i = 0; i < towers.length - 1; i++) {
            if (getDistance(tower.x, tower.y, towers[i].x, towers[i].y) < tower.radius + towers[i].radius) {
                placing = true;
                requestAnimationFrame(place);
            }
        }
        drawTowers(towers);
    }
    drawPath();
}

function setNewMap() {
    setMap(mapDropdown.options[mapDropdown.selectedIndex].text);
    clear();
    drawPath();
}

function checkAfford() {
    placeFngBtn.disabled = cash < 100;
    placeMarksmanBtn.disabled = cash < 100;
    placeGunsmithBtn.disabled = cash < 150;
}

function upgrade() {
    selectedTower.upgrade();
    checkUpgrade();
}

function checkUpgrade() {
    upgradeBtn.innerText = selectedTower.getUpgradeText() + ' ($' + selectedTower.getUpgradePrice() + ')';
    upgradeBtn.disabled = selectedTower.rank >= 3 || cash <= selectedTower.getUpgradePrice();
}

