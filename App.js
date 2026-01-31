// File: App.js
import { Engine } from './Engine.js';
import { UI } from './UI.js';
import { THE_GRID, loadData } from './Store.js';

const init = () => {
    const mission = Engine.getDailyMission();
    const strip = document.getElementById('aegis-strip');
    const toolGrid = document.querySelector('.tool-grid'); // Assumes target in index.html

    if(strip) strip.innerHTML = UI.renderAegisStrip(mission);
    // Initializing the rest of the grid components...
    console.log("THE_GRID ISO_BUILD V6.0 ONLINE");
};

window.addEventListener('DOMContentLoaded', init);
