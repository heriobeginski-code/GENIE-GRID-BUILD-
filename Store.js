// File: Store.js

export const THE_GRID = {
    armory: {
        chores: ["Deep Clean House", "Inventory/Restock", "House Tidy", "Pets – Daily"],
        work: ["Instagram – Light", "AI Course – Theory", "Outreach", "Email Wipe"],
        clients: ["Video Client A", "Video Client B", "App Dev Sync"]
    },
    protocol7: {
        MON: { mission: "Run + Video Client A (Vid 1/1)", length: "1-2 Hours" },
        TUE: { mission: "Gym (Arms/Back/Core) + App Dev", length: "2-3 Hours" },
        WED: { mission: "Run + Video Client B (Vid 1/2)", length: "1-2 Hours" },
        THU: { mission: "Gym (Legs) + App Dev", length: "2-3 Hours" },
        FRI: { mission: "Run + Video Client B (Vid 2/2)", length: "1-2 Hours" },
        SAT: { mission: "Planning & Review + Course Prep", length: "2-4 Hours" },
        SUN: { mission: "Gym (Pilates) + Job/Grant Apps", length: "2 Hours" }
    },
    tools: [
        { name: "Perplexity", url: "https://www.perplexity.ai/" },
        { name: "Lovable", url: "https://lovable.dev" },
        { name: "n8n", url: "https://n8n.io/" },
        { name: "NotebookLM", url: "https://notebooklm.google/" },
        { name: "Bolt.new", url: "https://bolt.new/" }
        // ... Logic for all 30+ URLs is condensed here for the build core
    ]
};

export const saveData = (key, data) => {
    localStorage.setItem(`RINZLER_${key}`, JSON.stringify(data));
};

export const loadData = (key) => {
    const data = localStorage.getItem(`RINZLER_${key}`);
    return data ? JSON.parse(data) : null;
};
