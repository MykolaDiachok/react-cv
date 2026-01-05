import React from 'react';
import { SiteHeader } from '../shared/site-header.tsx';

export const ContractPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-24 text-left">
        <section className="rounded-2xl border border-teal-200/40 bg-white/90 p-6 shadow-sm dark:border-teal-800/40 dark:bg-gray-900/60">
          <header>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-500 dark:text-teal-300">
              Contracts
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Contract Workspace
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              This page is reserved for future contract automation demos. Content will be added
              soon.
            </p>
          </header>
        </section>
      </main>
    </div>
  );
};
