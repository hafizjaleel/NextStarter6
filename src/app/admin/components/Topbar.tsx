'use client';

import { Search, Bell, Settings } from 'lucide-react';

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white">
      <div className="flex h-20 items-center justify-between px-8">
        {/* Page Title */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search courses, users..."
              className="w-full rounded-full bg-slate-50 pl-10 pr-5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 transition focus:outline-none focus:ring-2 focus:ring-emerald-100"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Notification Button */}
          <button
            className="relative rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
            aria-label="Notifications"
          >
            <Bell strokeWidth={2} className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-rose-500" />
          </button>

          {/* Settings Button */}
          <button
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
            aria-label="Settings"
          >
            <Settings strokeWidth={2} className="h-5 w-5" />
          </button>

          {/* Avatar & Profile */}
          <button
            className="ml-2 flex items-center gap-2.5 rounded-lg p-1.5 transition hover:bg-slate-50"
            aria-label="Profile"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
            <div className="hidden md:block text-right">
              <p className="text-xs font-medium text-slate-900">Admin</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
