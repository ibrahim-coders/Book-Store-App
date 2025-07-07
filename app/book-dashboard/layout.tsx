'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';

export default function SideNavigationUserProfile() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 '
            : ''
        }`}
        aria-expanded={isSideNavOpen ? 'true' : 'false'}
        aria-controls="nav-menu-4"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          />
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          />
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          />
        </div>
      </Button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-4"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? 'translate-x-0' : ' -translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
          <div className="shrink-0">
            <Link
              href="/"
              className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              <Image
                src=""
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
              <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
                <span className="sr-only"> online </span>
              </span>
            </Link>
          </div>
          <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
            <h4 className="w-full truncate text-base text-slate-700">
              Luke Skywalker
            </h4>
            <p className="w-full truncate text-sm text-slate-500">
              Jedi warrior
            </p>
          </div>
        </div>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <Link
                  href="/book-dashboard"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center">
                    <LayoutDashboard />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  href="/book-dashboard"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center">
                    <LayoutDashboard />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="px-3">
                <Link
                  href="/book-dashboard"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500 "
                >
                  <div className="flex items-center self-center">
                    <LayoutDashboard />
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Dashboard
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
}
