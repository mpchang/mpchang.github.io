import { useEffect } from 'react';

/**
 * Custom hook to track page views with Google Analytics
 * Call this hook in your main App component to enable tracking
 */
export const usePageTracking = () => {
  useEffect(() => {
    // Check if gtag is available
    if (typeof window.gtag === 'function' && window.GA_MEASUREMENT_ID) {
      // Track initial page view
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
      });
    }
  }, []);
};

/**
 * Function to track custom events
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag === 'function' && window.GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, eventParams);
  }
};

export default usePageTracking;
