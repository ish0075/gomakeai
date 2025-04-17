"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const tasks_1 = require("@/lib/supabase/tasks");
function TaskboardPage() {
    const [tasks, setTasks] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        loadTasks();
    }, []);
    async function loadTasks() {
        setLoading(true);
        const agents = ["Buzzbot", "Clarissa", "Curt Dog", "Big D", "OutreachBot", "ThinkTank", "Crawler"];
        let all = [];
        for (const name of agents) {
            const t = await (0, tasks_1.getAgentTasks)(name);
            all = all.concat(t);
        }
        setTasks(all);
        setLoading(false);
    }
    async function approve(id) {
        await (0, tasks_1.updateTaskStatus)(id, "approved");
        loadTasks();
    }
    if (loading)
        return <div className="p-6 text-white bg-black">Loading…</div>;
    return (<div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">🧠 GTP Agent Taskboard</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((t) => (<div key={t.id} className="bg-zinc-900 border border-purple-800 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-1">{t.agent_name}</h2>
            <p className="text-purple-300 mb-1"><strong>Type:</strong> {t.task_type}</p>
            <p className="text-sm text-zinc-300 mb-2"><strong>Status:</strong> {t.status}</p>
            {t.content && (<pre className="text-xs text-zinc-400 bg-zinc-800 p-2 rounded mb-2">
                {JSON.stringify(t.content, null, 2)}
              </pre>)}
            {t.status === "pending" && (<button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm" onClick={() => approve(t.id)}>
                ✅ Approve
              </button>)}
          </div>))}
      </div>
    </div>);
}
exports.default = TaskboardPage;
//# sourceMappingURL=page.js.map