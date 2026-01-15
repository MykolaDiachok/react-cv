const getBasePathname = (): string => {
  // Vite base (e.g. "/react-cv/")
  const base = import.meta.env.BASE_URL ?? '/';
  const normalized = base.endsWith('/') ? base.slice(0, -1) : base;
  return normalized.length === 0 ? '' : normalized;
};

/**
 * Opens a new tab for printing and triggers the browser print dialog.
 *
 * This is GitHub Pages-safe because it respects Vite's `BASE_URL`.
 */
export const openPrintWindow = (appPath: string): void => {
  const base = getBasePathname();
  const path = appPath.startsWith('/') ? appPath : `/${appPath}`;
  const url = `${base}${path}`;

  const win = window.open(url, '_blank', 'noopener,noreferrer');
  if (!win) return;

  win.addEventListener('load', () => {
    // Small delay improves reliability across browsers.
    globalThis.setTimeout(() => {
      try {
        win.focus();
        win.print();
      } catch {
        // no-op
      }
    }, 150);
  });
};
