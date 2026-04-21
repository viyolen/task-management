'use client';

import { useState, useEffect } from 'react';
import { createTask, updateTask } from '@/lib/api/tasks';
import { Task } from '@/types/task';
import { useRouter } from 'next/navigation';

export default function TaskForm({ currentTask, onSuccess }: { currentTask?: Task | null, onSuccess: () => void }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: currentTask?.title || '',
    description: currentTask?.description || '',
    priority: currentTask?.priority?.value || 'medium',
    status: currentTask?.status?.value || 'todo',
  });

  // currentTask değiştiğinde formu doldur

  useEffect(() => {
    setFormData({
      title: currentTask?.title || '',
      description: currentTask?.description || '',
      priority: currentTask?.priority?.value || 'medium',
      status: currentTask?.status?.value || 'todo',
    });
  }, [currentTask]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (currentTask) {
        await updateTask(currentTask.id, formData);
      } else {
        await createTask(formData);
        setFormData({ title: '', description: '', priority: 'medium', status: 'todo' });
      }
      onSuccess();
      router.refresh();
    } catch (error) {
      alert('İşlem sırasında beklenmedik bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100 flex flex-col gap-5">
      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Görev Başlığı</label>
        <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all outline-none text-slate-800 font-medium" placeholder="Örn: Raporlamaları yap" />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Açıklama</label>
        <textarea value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 h-28 resize-none focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all outline-none text-slate-800 leading-relaxed" placeholder="Opsiyonel detaylar..."></textarea>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Durum</label>
          <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:bg-white transition-all outline-none text-slate-800 font-medium cursor-pointer">
            <option value="todo">Yapılacak</option>
            <option value="in_progress">Devam Ediyor</option>
            <option value="done">Tamamlandı</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Öncelik</label>
          <select value={formData.priority} onChange={e => setFormData({...formData, priority: e.target.value})} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:bg-white transition-all outline-none text-slate-800 font-medium cursor-pointer">
            <option value="low">Düşük</option>
            <option value="medium">Orta</option>
            <option value="high">Yüksek</option>
          </select>
        </div>
      </div>
      <button disabled={loading} type="submit" className="w-full mt-4 bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 active:scale-[0.98] transition-all disabled:opacity-50">
        {loading ? 'İşleniyor...' : currentTask ? 'Görevi Güncelle' : 'Görevi Oluştur'}
      </button>
    </form>
  );
}
