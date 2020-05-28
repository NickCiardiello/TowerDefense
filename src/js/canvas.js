import Tower from './towers/Tower';
import {
    canvas,
    mouse,
    pathElement,
    cashLbl,
    healthLbl,
    playBtn,
    mapDropdown,
    placeBasicTowerBtn, placeSniperTowerBtn, placeSentryTowerBtn,
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
    health = 100000;
}
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
canvas.addEventListener('click', function() { placing = false; }, false);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && placing) {
        placing = false;
        towers.pop();
        cash += towers[towers.length - 1].price;
        drawTowers(towers);
        drawPath();
    }
}, false);


/*
Drag and drop tower
 */
function placeTower(towerType) {
    placing = true;
    towers[towers.length] = new Tower(towerType, mouse.x, mouse.y);
    place();
}
function place() {
    clear();
    if (placing) {
        requestAnimationFrame(place);
        towers[towers.length - 1].update(mouse.x, mouse.y);
        drawTowersFull(towers);
    } else {
        cash -= towers[towers.length - 1].price;
        cashLbl.innerHTML = "$" + cash;
        checkAfford(cash);
        drawTowers(towers);
    }
    drawPath();
}

/*
Play round
 */
function run() {
    running = true;
    enemies = createEnemiesForRound(round);
    startRound();
}
function startRound() {
    clear();
    drawTowers(towers);
    drawPath();
    for (let i = 0; i < enemies.length; i++) {
        let x = parseInt(pathElement.getPointAtLength(enemies[i].step).x);
        let y = parseInt(pathElement.getPointAtLength(enemies[i].step).y);
        enemies[i].update(x, y);
        enemies[i].move();
        if (enemies[i].step >= pathElement.getTotalLength()) {
            health -= enemies[i].damage;
            enemies.splice(i, 1);
            healthLbl.innerHTML = "Health: " + health;
            if (health <= 0) {
                alert('Game Over');
            }
        }
    }
    for (let i = enemies.length - 1; i >= 0; i--) {
        for (let j = 0; j < towers.length; j++) {
            if (enemies[i].alive > 0 && getDistance(enemies[i].x, enemies[i].y, towers[j].x, towers[j].y) < towers[j].rangeRadius) {
                if (!enemies[i].camo || (enemies[i].camo && towers[j].detectCamo)) {
                    drawAttack(towers[j].x, towers[j].y, enemies[i].x, enemies[i].y);
                    enemies[i].hit(towers[j].damage);
                }
                if (!enemies[i].alive) {
                    cash += enemies[i].damage;
                    cashLbl.innerHTML = "$" + cash;
                    enemies.splice(i, 1);
                }
            }
        }
    }
    if (enemies.length === 0) {
        running = false;
        cash += getReward(round);
        cashLbl.innerHTML = "$" + cash;
        checkAfford();
        round++;
        playBtn.innerHTML = "Play Round " + round;
    }
    else {
        requestAnimationFrame(startRound)
    }
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
