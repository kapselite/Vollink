import { useSyncExternalStore } from 'react';

export type Page = 'home' | 'about' | 'print-design' | 'technology';

export interface Route {
  page: Page;
  // Element id to scroll to once the page renders (e.g. a section on the page)
  anchor?: string;
}

// Hash formats: #about, #services/technology, #services/print-design/signage, #contact (Home section)
export const parseHash = (hash: string): Route => {
  const [first, second, third] = hash.replace(/^#\/?/, '').split('/');

  if (first === 'about') return { page: 'about' };
  if (first === 'services' && (second === 'print-design' || second === 'technology')) {
    return { page: second, anchor: third };
  }
  return { page: 'home', anchor: first || undefined };
};

const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};

export const useHash = () => useSyncExternalStore(subscribe, () => window.location.hash);
