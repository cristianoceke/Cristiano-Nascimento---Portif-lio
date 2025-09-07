"use client";

import { useState } from "react";

type Task = {
    id: string;
    title: string;
    status: "Backlog" | "In progress" | "QA / Testing"
};

const COLUMNS = [
    { key: "Backlog", title: "Backlog", headerClass: "bg-zinc-700", accent: "text-amber-500" },
    { key: "In progress", title: "In progress", headerClass: "bg-neutral-600", accent: "text-purple-400" },
    { key: "QA / Testing", title: "QA / Testing", headerClass: "bg-neutral-700", accent: "text-green-500" },
] as const;

const INITIAL_TASKS: Task[] = [
    { id: "t1", title: "Criar seção 'Início'(hero)", status: "Backlog" },
    { id: "t2", title: "Ajustar tipografia do 'Sobre mim'", status: "Backlog" },
    { id: "t3", title: "Responsividade do sidebar", status: "In progress" },
    { id: "t4", title: "Tooltips dos ícones sociais", status: "QA / Testing" },
]

export default function Kanban() {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
    const [over, setOver] = useState<null | Task["status"]>(null);

    function handleDrop(targetStatus: Task["status"], e: React.DragEvent) {
        const taskId = e.dataTransfer.getData("text/plain");
        if (!taskId) return;
        setTasks((prev) =>
            prev.map((t) => (t.id === taskId ? { ...t, status: targetStatus } : t))
        );
    }

    function addTask(title: string) {
        const nova: Task = { id: crypto.randomUUID(), title, status: "Backlog" };
        setTasks((prev) => [nova, ...prev]);
    }

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {COLUMNS.map((col) => {
                const tasksHere = tasks.filter((t) => t.status === col.key);
                return (
                    <section
                        key={col.key}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setOver(col.key);
                        }}
                        onDragLeave={() => setOver((curr) => (curr === col.key ? null : curr))}
                        onDrop={(e) => {
                            handleDrop(col.key, e);
                            setOver(null);
                        }}
                        className={`rounded-lg border border-white/10 bg-zinc-800/50 backdrop-blur transition
                            ${over === col.key ? "ring-2 ring-amber-600" : ""}`}
                    >
                        <header className={`${col.headerClass} rounded-t-lg px4 py-3`}>
                            <h3 className="text-center text-sm font-extrabold tracking-widest text-white/70">
                                {col.title}
                            </h3>
                        </header>
                        <ul className="p-3 space-y-3">
                            {tasksHere.map((task) => (
                                <li
                                    key={task.id}
                                    draggable
                                    onDragStart={(e) => {
                                        e.dataTransfer.setData("text/plain", task.id);
                                        e.dataTransfer.effectAllowed = "move";
                                    }}
                                    className="cursor-pointer rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-left hover:border-white/20 transition-colors"
                                >
                                    <h4 className={`text-sm font-semibold ${col.accent}`}>
                                        {task.title}
                                    </h4>
                                </li>
                            ))}

                            {tasksHere.length === 0 && (
                                <li className="rounded-xl border border-dashed border-white/10 p-6 text-center text-xs text-white/40">
                                    Sem itens aqui
                                </li>
                            )}
                        </ul>
                    </section>
                )
            })}
        </div>
    )
}