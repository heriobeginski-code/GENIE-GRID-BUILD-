// File: UI.js
export const UI = {
    // #1: All links in a high-performance table
    renderToolTable: (tools) => {
        let rows = tools.map(tool => `
            <tr class="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition">
                <td class="p-3 text-xs font-bold uppercase text-white">${tool.name}</td>
                <td class="p-3 text-[10px] text-cyan-400 font-mono">
                    <a href="${tool.url}" target="_blank" class="hover:underline">OPEN_SRC ></a>
                </td>
            </tr>
        `).join('');

        return `
            <div class="overflow-x-auto bg-black/40 rounded-lg border border-cyan-500/20">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-cyan-500/10 text-[10px] uppercase tracking-widest text-cyan-300">
                            <th class="p-3">Module</th>
                            <th class="p-3">Access_Point</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    },

    // #2: 30-Day Editable Financial Grid
    renderFinancialGrid: (billData) => {
        let cells = "";
        for (let i = 1; i <= 30; i++) {
            const content = billData[i] || "";
            cells += `
                <div class="border border-white/10 h-20 p-1 relative group">
                    <span class="text-[9px] text-white/30 absolute top-1 left-1">${i}</span>
                    <div contenteditable="true" 
                         onblur="window.saveCell(${i}, this.innerText)"
                         class="w-full h-full pt-4 text-[10px] text-cyan-200 outline-none bg-transparent">
                         ${content}
                    </div>
                </div>
            `;
        }
        return `<div class="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-10 border-t border-l border-white/10">${cells}</div>`;
    },

    // #3: GEM Sync Bridge
    renderReadingVault: () => {
        return `
            <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-red-400">GEM_READINGS</h3>
                    <button onclick="window.syncGEM()" class="text-[10px] bg-red-500/20 px-3 py-1 rounded border border-red-500/40 hover:bg-red-500/40">SYNC_DATA</button>
                </div>
                <div id="gem-container" class="space-y-2">
                    <p class="text-[10px] text-white/40 italic">Waiting for handshake...</p>
                </div>
            </div>
        `;
    }
};
