// File: App.js
import { Engine } from './Engine.js';
import { UI } from './UI.js';
import { THE_GRID, loadData, saveData } from './Store.js';

const init = () => {
    console.log("SYSTEM_INITIALIZING...");

    // 1. Get DOM Targets
    const missionEl = document.getElementById('mission-status');
    const hydrationEl = document.getElementById('hydration-module');
    const toolEl = document.getElementById('tool-table-container');
    const financialEl = document.getElementById('financial-matrix');
    const readingEl = document.getElementById('reading-vault-container');

    // 2. Load Persistent Data
    const mission = Engine.getDailyMission();
    const currentHydration = loadData('hydration') || 0;
    const billData = loadData('bills') || {};

    // 3. Render and Inject
    if (missionEl) missionEl.innerHTML = `
        <h2 class="orbitron text-[10px] text-cyan-400 tracking-widest mb-2">ACTIVE_MISSION</h2>
        <div class="text-sm font-bold">${mission.mission}</div>
        <div class="text-[10px] text-white/40 mt-1">ESTIMATED_TIME: ${mission.length}</div>
    `;

    if (hydrationEl) hydrationEl.innerHTML = UI.renderHydration(currentHydration);
    
    if (toolEl) toolEl.innerHTML = UI.renderToolTable(THE_GRID.tools);
    
    if (financialEl) financialEl.innerHTML = UI.renderFinancialGrid(billData);
    
    if (readingEl) readingEl.innerHTML = UI.renderReadingVault();

    console.log("THE_GRID_ONLINE");
};

// Global Handlers (Required for HTML onClick events)
window.addWater = (amt) => {
    const current = loadData('hydration') || 0;
    const updated = Engine.updateHydration(current, amt);
    init(); // Re-render without full page reload
};

window.derezWater = () => {
    if(confirm("DEREZ HYDRATION DATA?")) {
        saveData('hydration', 0);
        init();
    }
};

window.saveCell = (day, text) => {
    let currentBills = loadData('bills') || {};
    currentBills[day] = text;
    saveData('bills', currentBills);
};

window.syncGEM = () => {
    const container = document.getElementById('gem-container');
    container.innerHTML = `<div class="animate-pulse text-[10px] text-red-500 font-bold">COMPILING_READINGS...</div>`;
    setTimeout(() => {
        container.innerHTML = `<p class="text-[10px] text-green-400 uppercase font-bold tracking-tighter">Success: GEM_V1 Data Injected.</p>`;
    }, 1200);
};

// Fire System
window.addEventListener('DOMContentLoaded', init);
