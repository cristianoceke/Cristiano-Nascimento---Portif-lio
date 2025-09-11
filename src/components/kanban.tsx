"use client";

import { useState, useEffect } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type Status = "Backlog" | "In progress" | "QA / Testing";

type Task = {
  id: string;
  title: string;
  status: Status;
};

const COLUMNS: { id: Status; title: string; headerClass: string; accent: string }[] = [
  { id: "Backlog",     title: "BACKLOG",     headerClass: "bg-zinc-700",  accent: "text-amber-500" },
  { id: "In progress", title: "IN PROGRESS", headerClass: "bg-neutral-600",accent: "text-purple-400" },
  { id: "QA / Testing",title: "QA / TESTING",headerClass: "bg-neutral-700",accent: "text-green-500" },
];

const INITIAL_TASKS: Task[] = [
  { id: "t1", title: "Criar seção 'Início' (hero)", status: "Backlog" },
  { id: "t2", title: "Ajustar tipografia do 'Sobre mim'", status: "Backlog" },
  { id: "t3", title: "Responsividade do sidebar", status: "In progress" },
  { id: "t4", title: "Tooltips dos ícones sociais", status: "QA / Testing" },
];

export default function Kanban() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor,   { activationConstraint: { delay: 120, tolerance: 5 } })
  );

  // ✅ corrigido: tipado corretamente
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const taskId = String(active.id);
    const targetStatus = over.id as Status;

    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: targetStatus } : t))
    );
  }

  if (!mounted) return null; 

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3">
        {COLUMNS.map((col) => {
          const tasksHere = tasks.filter((t) => t.status === col.id);
          return (
            <DroppableColumn
              key={col.id}
              id={col.id}
              headerClass={col.headerClass}
              title={col.title}
            >
              <ul className="p-3 space-y-3">
                {tasksHere.map((task) => (
                  <DraggableCard
                    key={task.id}
                    id={task.id}
                    accent={col.accent}
                    title={task.title}
                  />
                ))}
                {tasksHere.length === 0 && (
                  <li className="rounded-xl border border-dashed border-white/10 p-6 text-center text-xs text-white/40">
                    Sem itens aqui
                  </li>
                )}
              </ul>
            </DroppableColumn>
          );
        })}
      </div>
    </DndContext>
  );
}

function DroppableColumn({
  id,
  title,
  headerClass,
  children,
}: {
  id: Status;
  title: string;
  headerClass: string;
  children: React.ReactNode;
}) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <section
      ref={setNodeRef}
      className={`rounded-lg border border-white/10 bg-zinc-800/50 backdrop-blur transition
        ${isOver ? "ring-2 ring-amber-600" : ""}`}
    >
      <header className={`${headerClass} rounded-t-lg px-4 py-3`}>
        <h3 className="text-center text-sm font-extrabold tracking-widest text-white/70">
          {title}
        </h3>
      </header>
      {children}
    </section>
  );
}

function DraggableCard({
  id,
  title,
  accent,
}: {
  id: string;
  title: string;
  accent: string;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    opacity: isDragging ? 0.7 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing touch-none rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-left hover:border-white/20 transition"
    >
      <h4 className={`text-sm font-semibold ${accent}`}>{title}</h4>
    </li>
  );
}
