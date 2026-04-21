'use client';

import { Task } from '@/types/task';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { useState, useEffect } from 'react';

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Görev değiştiğinde formu resetle
  useEffect(() => {
     if(editingTask && !tasks.find(t => t.id === editingTask.id)) {
        setEditingTask(null);
     }
  }, [tasks, editingTask]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start relative">
      <div className="lg:col-span-2 space-y-4">
        {tasks.length === 0 ? (
           <div className="text-center p-12 bg-white rounded-lg border border-dashed border-slate-300 text-slate-500 flex flex-col items-center">
             <span>Herhangi bir görev bulunamadı.</span>
           </div>
        ) : (
           tasks.map(task => (
             <TaskItem key={task.id} task={task} onEdit={setEditingTask} />
           ))
        )}
      </div>
      <div className="lg:col-span-1 sticky top-24">
        <div className="flex items-center gap-2 mb-4">
           <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
           <h2 className="text-xl font-bold text-slate-800 tracking-tight">
             {editingTask ? 'Görevi Düzenle' : 'Yeni Görev'}
           </h2>
        </div>
        <TaskForm currentTask={editingTask} onSuccess={() => setEditingTask(null)} />
        {editingTask && (
            <button onClick={() => setEditingTask(null)} className="w-full text-center mt-3 text-sm text-slate-500 hover:text-slate-900 font-medium">Düzenlemeyi İptal Et</button>
        )}
      </div>
    </div>
  );
}
