// File: App.js
import { THE_GRID, loadData, saveData } from './Store.js';

const AppEngine = {
    getMission: () => {
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const today = days[new Date().getDay()];
        return THE_GRID.protocol7[today] || { mission: "System Standby", length: "0h" };
    }
};

const AppUI = {
    renderTable: (tools) => {
        let rows = tools.map(t => `
            <tr class="border-b border-cyan-900/30">
                <td class="p-3 text-xs uppercase text-white">${t.name}</td>
                <td class="p-3 text-[10px] text-cyan-400 font-mono"><a href="${t.url}" target="_blank">OPEN ></a></td>
            </tr>`).join('');
        return `<table class="w-full text-left"><tbody>${rows}</tbody></table>`;
    },
    renderCalendar: (data) => {
        let cells = "";
        for (let i = 1; i <= 30; i++) {
            cells += `
            <div class="border border-white/5 h-16 p-1 text-[10px] relative">
                <span class="opacity-30">${i}</span>
                <div contenteditable="true" onblur="window.saveCell(${i}, this.innerText)" class="outline-none text-cyan-200 mt-1">${data[i] || ''}</div>
            </div>`;
        }
        return `<div class="grid grid-cols-5 md:grid-cols-10 border-t border-l border-white/5">${cells}</div>`;
    }
};

const init = () => {
    console.log("INITIALIZING_GRID...");
    try {
        const mission = AppEngine.getMission();
        const bills = loadData('bills') || {};

        const missionTarget = document.getElementById('mission-status');
        const toolTarget = document.getElementById('tool-table-container');
        const financialTarget = document.getElementById('financial-matrix');

        if(missionTarget) missionTarget.innerHTML = `
            <h2 class="text-cyan-400 text-[10px] tracking-[0.3em] mb-2 font-bold uppercase">Active_Protocol</h2>
            <div class="text-lg font-bold">${mission.mission}</div>
            <div class="text-[10px] opacity-50 font-mono mt-1">DUR: ${mission.length}</div>
        `;

        if(toolTarget) toolTarget.innerHTML = AppUI.renderTable(THE_GRID.tools);
        if(financialTarget) financialTarget.innerHTML = AppUI.renderCalendar(bills);

        console.log("GRID_ONLINE");
    } catch (err) {
        console.error("GRID_CRASH:", err);
        document.body.innerHTML = `<div style="color:red; font-family:monospace; padding:20px;">SYSTEM_CRASH: ${err.message}</div>`;
    }
};

// Listeners
window.saveCell = (day, text) => {
    let bills = loadData('bills') || {};
    bills[day] = text;
    saveData('bills', bills);
};

window.addEventListener('DOMContentLoaded', init);
