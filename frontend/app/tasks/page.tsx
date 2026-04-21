import { getTasks } from '@/lib/api/tasks';
import TaskList from '@/components/tasks/TaskList';
import TaskFilters from '@/components/tasks/TaskFilters';

export const dynamic = 'force-dynamic';

export default async function TasksPage({ searchParams }: { searchParams: { status?: string, priority?: string } }) {
  // Await searchParams in Next.js 15+ if needed, this code is compatible with 14. 
  // Let's resolve the promise for recent Next.js versions avoiding issues:
  const params = await searchParams;
  
  let responseData;
  let hasError = false;

  try {
    responseData = await getTasks(params?.status, params?.priority);
  } catch (err) {
    hasError = true;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Proje Görevleri</h1>
        <p className="text-slate-500">Ekibinizin veya kendinizin yapacağı görevleri ekleyip sürecini takip edebilirsiniz.</p>
      </div>
      
      {hasError ? (
          <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-md">
             Sunucu ile iletişim kurulamadı. API erişimini kontrol edin. (Backend docker app servisi çalışıyor olmalı)
          </div>
      ) : (
          <>
            <TaskFilters />
            <TaskList tasks={responseData?.data || []} />
          </>
      )}
    </div>
  );
}
