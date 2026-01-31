// File: UI.js
export const UI = {
    renderToolGrid: (tools) => {
        return tools.map(tool => `
            <a href="${tool.url}" target="_blank" 
               class="p-4 border border-cyan-500/30 bg-white/5 rounded-lg flex justify-between items-center hover:bg-cyan-500/10 transition">
                <span class="text-xs uppercase tracking-tighter">${tool.name}</span>
                <span class="text-[10px] text-cyan-400">LINK ></span>
            </a>
        `).join('');
    },

    renderAegisStrip: (mission) => {
        return `
            <div class="flex flex-col items-center">
                <span class="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">MISSION ACTIVE</span>
                <span class="text-white text-xs">${mission.mission} (${mission.length})</span>
            </div>
        `;
    }
};
