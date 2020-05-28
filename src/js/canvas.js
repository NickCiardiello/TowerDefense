import Tower from './towers/Tower';
import {
    canvas,
    mouse,
    pathElement,
    cashLbl,
    healthLbl,
    playBtn,
    mapDropdown,
    placeBasicTowerBtn, placeSniperTowerBtn, placeSentryTowerBtn, upgradeBtn,
} from './Constants';
import { getDistance } from './utils';
import { createEnemiesForRound, getReward } from './Rounds';
import { setMap } from "./Maps";
import { clear, drawPath, drawTowers, drawTowersFull, drawAttack } from "./Draw";

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
setMap('');
checkAfford(cash);
drawPath();
playBtn.addEventListener ("click", run, false);
mapDropdown.addEventListener ("change", function() { setNewMap() }, false);
placeBasicTowerBtn.addEventListener ("click", function() { placeTower('BasicTower') }, false);
placeSniperTowerBtn.addEventListener ("click", function() { placeTower('SniperTower') }, false);
placeSentryTowerBtn.addEventListener ("click", function() { placeTower('SentryTower') }, false);
upgradeBtn.addEventListener ("click", function() { upgrade() }, false);
canvas.addEventListener('click', function() {
    if (placing) {
        placing = false;
    } else {
        for (let i = 0; i < towers.length; i++) {
            if (getDistance(mouse.x, mouse.y, towers[i].x, towers[i].y) < towers[i].radius) {
                selectedTower = towers[i];
                selectedTower.isSelected = true;
                checkUpgrade();
            }
            // towers[i].isSelected = getDistance(mouse.x, mouse.y, towers[i].x, towers[i].y) < towers[i].radius;
            // upgradeBtn.disabled = false;
            // upgradeBtn.innerText = "Dual Wield ($50)";
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
        console.log(towers[i].numTargets);
        let numTargets = towers[i].numTargets;
        for (let j = 0; j < enemies.length; j++) {
            if (getDistance(towers[i].x, towers[i].y, enemies[j].x, enemies[j].y) < towers[i].rangeRadius &&
                enemies[i].step >= 0 &&
                (!enemies[i].camo || (enemies[i].camo && towers[i].detectCamo))) {
                drawAttack(towers[i].x, towers[i].y, enemies[j].x, enemies[j].y);
                enemies[j].hit(towers[i].damage);
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
}

/*
Drag and drop tower
 */
function placeTower(towerType) {
    placing = true;
    towers[towers.length] = new Tower(towerType, mouse.x, mouse.y);
    cash -= towers[towers.length - 1].price;
    cashLbl.innerHTML = "$" + cash;
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
    placeBasicTowerBtn.disabled = cash < 100;
    placeSentryTowerBtn.disabled = cash < 100;
    placeSniperTowerBtn.disabled = cash < 150;
}

function upgrade() {
    selectedTower.upgrade();
    checkUpgrade();
}

function checkUpgrade() {
    if (cash >= selectedTower.getUpgradePrice()) {
        upgradeBtn.disabled = false;
        upgradeBtn.innerText = selectedTower.getUpgradeText();
    }
}

