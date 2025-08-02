'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Book, LayoutDashboard, Plus } from 'lucide-react';

export default function SideNavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      {/* Menu Toggle Button */}
      <Button
        type="button"
        className={`visible fixed left-6 top-6 z-40 block h-10 w-10 rounded bg-white lg:hidden ${
          isSideNavOpen
            ? 'opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0'
            : ''
        }`}
        aria-expanded={isSideNavOpen ? 'true' : 'false'}
        aria-controls="nav-menu-4"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300" />
          <span className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300" />
          <span className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300" />
        </div>
      </Button>

      {/* ➕ Add Button */}
      <Button
        type="button"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        className={`fixed right-6 top-6 z-40 flex items-center gap-2 bg-slate-600 text-white hover:bg-slate-800 px-4 py-2 rounded-full shadow-lg cursor-pointer transition-colors lg:hidden ${
          isSideNavOpen ? '' : 'hidden'
        }`}
      >
        <Plus size={16} />
      </Button>

      {/* Sidebar */}
      <aside
        id="nav-menu-4"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex-1 overflow-auto divide-y divide-slate-100 pt-6">
          <ul className="flex flex-col gap-1 py-3">
            <li className="px-3">
              <Link
                href="/book-dashboard"
                className="flex items-center gap-3 rounded p-3 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-500"
              >
                <LayoutDashboard />
                <span className="truncate text-sm">Dashboard</span>
              </Link>
            </li>
            <li className="px-3">
              <Link
                href="/book-dashboard/add-book"
                className="flex items-center gap-3 rounded p-3 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-500"
              >
                <Book />
                <span className="truncate text-sm">Add Book</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsSideNavOpen(false)}
      />

      {/* Page Content */}
      <main className="flex-1 p-6 ml-0 lg:ml-72">{children}</main>
    </>
  );
}
