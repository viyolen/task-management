'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function TaskFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-2 text-sm mb-8 transition-all">
      <div className="px-3 py-1.5 text-slate-400 border-r border-slate-100 hidden sm:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
      </div>
      <select 
        value={searchParams.get('status') || ''} 
        onChange={e => handleFilter('status', e.target.value)} 
        className="px-4 py-2 bg-transparent border-none outline-none cursor-pointer font-medium text-slate-700 hover:text-indigo-600 transition-colors focus:ring-0"
      >
        <option value="">Tüm Durumlar</option>
        <option value="todo">Yapılacaklar</option>
        <option value="in_progress">Devam Edenler</option>
        <option value="done">Tamamlananlar</option>
      </select>
      <div className="w-px h-6 bg-slate-100 mx-1 hidden sm:block"></div>
      <select 
        value={searchParams.get('priority') || ''} 
        onChange={e => handleFilter('priority', e.target.value)} 
        className="px-4 py-2 bg-transparent border-none outline-none cursor-pointer font-medium text-slate-700 hover:text-indigo-600 transition-colors focus:ring-0"
      >
        <option value="">Tüm Öncelikler</option>
        <option value="low">Düşük</option>
        <option value="medium">Orta</option>
        <option value="high">Yüksek</option>
      </select>
      
      {(searchParams.get('status') || searchParams.get('priority')) && (
          <button onClick={() => router.push('?')} className="ml-auto text-xs font-bold text-red-500 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition-all uppercase tracking-tighter">Filtreleri Temizle</button>
      )}
    </div>
  );
}
