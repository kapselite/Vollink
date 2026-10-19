import { useSyncExternalStore } from 'react';

export type Page = 'home' | 'about' | 'contact' | 'services' | 'print-design' | 'technology';

export interface Route {
  page: Page;
  // Element id to scroll to once the page renders (e.g. a section on the page)
  anchor?: string;
}

/**
 * Hash path examples:
 * - #about => { page: 'about' }
 * - #contact => { page: 'contact' }
 * - #services => { page: 'services' }
 * - #services/print-design => { page: 'print-design' }
 * - #services/print-design/signage => { page: 'print-design', anchor: 'signage' }
 * - #services/technology/web-dev => { page: 'technology', anchor: 'web-dev' }
 * - #services-section => { page: 'home', anchor: 'services-section' }
 */
export const parseHash = (hash: string): Route => {
  const [first, second, third] = hash.replace(/^#\/?/, '').split('/');

  if (first === 'about') return { page: 'about' };
  if (first === 'contact' || first === 'contacts') return { page: 'contact' };
  
  if (first === 'services') {
    if (second === 'print-design' || second === 'technology') {
      return { page: second, anchor: third };
    }
    return { page: 'services', anchor: second };
  }

  return { page: 'home', anchor: first || undefined };
};

// SSR safety fallback for window.location.hash
const getHashSnapshot = () => {
  if (typeof window === 'undefined') return '';
  return window.location.hash;
};

const getServerSnapshot = () => '';

const subscribe = (onChange: () => void) => {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};

export const useHash = () => 
  useSyncExternalStore(subscribe, getHashSnapshot, getServerSnapshot);

export const useHashRoute = (): Route => {
  const hash = useHash();
  return parseHash(hash);
};

/**
 * Programmatic navigation helper
 */
export const navigateHash = (page: Page | string, anchor?: string) => {
  let target = '#';

  if (page === 'print-design' || page === 'technology') {
    target = `#services/${page}${anchor ? `/${anchor}` : ''}`;
  } else if (page !== 'home') {
    target = `#${page}${anchor ? `/${anchor}` : ''}`;
  } else if (anchor) {
    target = `#${anchor}`;
  }

  if (window.location.hash !== target) {
    window.location.hash = target;
  }
};