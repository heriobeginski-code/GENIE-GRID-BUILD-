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
// ... [Existing App.js imports and init function] ...

window.addEventListener('DOMContentLoaded', init);

// --- PASTE THE EXPANSION BELOW THIS LINE ---

window.saveCell = (day, text) => {
    let currentBills = loadData('bills') || {};
    currentBills[day] = text;
    saveData('bills', currentBills);
    console.log(`Financial Matrix Updated: Day ${day}`);
};

window.syncGEM = () => {
    const container = document.getElementById('gem-container');
    container.innerHTML = `<div class="animate-pulse text-[10px] text-red-500">COMPILING_READINGS...</div>`;
    setTimeout(() => {
        container.innerHTML = `<p class="text-[10px] text-green-400 uppercase">Success: GEM_V1 Data Injected.</p>`;
    }, 1200);
};
