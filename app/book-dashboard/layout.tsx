'use client';

// import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { Book, LayoutDashboard } from 'lucide-react';

export default function SideNavigationUserProfile({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <Button
        type="button"
        className={`visible fixed left-6 top-6 z-40 block h-10 w-10 rounded bg-white opacity-100 lg:hidden ${
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

      {/* Sidebar */}
      <aside
        id="nav-menu-4"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* User Profile */}
        <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
          <div className="shrink-0">
            <Link
              href="/"
              className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              {/* <Image
                src=" "
                alt="user"
                width={48}
                height={48}
                className="rounded-full"
              /> */}
              A
              <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white" />
            </Link>
          </div>
          <div className="text-center">
            <h4 className="truncate text-base text-slate-700">
              Luke Skywalker
            </h4>
            <p className="truncate text-sm text-slate-500">Jedi warrior</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-auto divide-y divide-slate-100">
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
            {/* Repeat similar <li> for other nav links */}
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
      <main className="flex-1 p-6 ml-0 lg:ml-72">
        <div className="flex justify-end mb-4">
          <UserButton />
        </div>
        {children}
      </main>
    </>
  );
}
