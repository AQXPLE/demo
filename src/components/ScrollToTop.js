import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on route change so nav doesn't leave user mid-page
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}
