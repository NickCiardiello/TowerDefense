// Canvas + Context
import {Fng} from "./towers/Fng";

export const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 800;
export const context = canvas.getContext('2d');

// Mouse
let rect = canvas.getBoundingClientRect();
export const mouse = {
    x: 0,
    y: 0
}
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX - rect.left;
    // mouse.y = event.clientY;
    mouse.y = event.clientY - rect.top / 2;
})

// Elements
export const pathElement = document.createElementNS('http://www.w3.org/2000/svg',"path");
export const playBtn = document.getElementById ("playBtn");
export const mapDropdown = document.getElementById ("mapDropdown");
export const placeFngBtn = document.getElementById ("placeFngBtn");
export const placeMarksmanBtn = document.getElementById ("placeMarksmanBtn");
export const placeGunsmithBtn = document.getElementById ("placeGunsmithBtn");
export const upgradeBtn = document.getElementById ("upgradeBtn");
export const cashLbl = document.getElementById('cashLbl');
export const healthLbl = document.getElementById('healthLbl');

export const TowerType = {
    FNG: 'Fng',
    MARKSMAN: 'Marksman',
    GUNSMITH: 'Gunsmith'
};
