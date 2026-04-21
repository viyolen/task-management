import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task Management',
  description: 'AI Assisted Task Management App',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen selection:bg-indigo-100 selection:text-indigo-900`}>
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">G</div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">Görev Yöneticisi</h1>
            </div>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 animate-in fade-in duration-700">
          {children}
        </main>
      </body>
    </html>
  );
}
