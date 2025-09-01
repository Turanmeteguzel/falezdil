import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    // Scroll to top on page refresh/load
    const handleBeforeUnload = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle page refresh
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Also scroll to top when component mounts (page load)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
