'use client';

import { Task } from '@/types/task';
import { deleteTask } from '@/lib/api/tasks';
import { useRouter } from 'next/navigation';

export default function TaskItem({ task, onEdit }: { task: Task; onEdit: (t: Task) => void }) {
  const router = useRouter();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'done': return 'bg-emerald-50 border-emerald-500 text-emerald-700 font-medium';
      case 'in_progress': return 'bg-blue-50 border-blue-500 text-blue-700 font-medium';
      case 'todo': return 'bg-slate-50 border-slate-300 text-slate-700 font-medium';
      default: return 'bg-white border-gray-200';
    }
  };

  const handleDelete = async () => {
    if (confirm('Silmek istediğinize emin misiniz?')) {
      try {
        await deleteTask(task.id);
        router.refresh();
      } catch (error) {
        alert('Silinemedi');
      }
    }
  };

  return (
    <div className={`p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 group`}>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
             <span className={`w-2 h-2 rounded-full ${task.status.value === 'done' ? 'bg-emerald-500' : task.status.value === 'in_progress' ? 'bg-blue-500' : 'bg-slate-300'}`}></span>
             <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{task.status.label}</span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors mb-1">{task.title}</h3>
          {task.description && <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">{task.description}</p>}
        </div>
        <div className="flex gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => onEdit(task)} className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors" title="Düzenle">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
          </button>
          <button onClick={handleDelete} className="p-2 bg-slate-50 text-slate-600 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors" title="Sil">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
        <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-tight ${getPriorityColor(task.priority.value)}`}>
          {task.priority.label} ÖNCELİK
        </span>
        <span className="text-[11px] text-slate-400 font-medium">
          {new Date(task.created_at).toLocaleDateString('tr-TR')}
        </span>
      </div>
    </div>
  );
}
