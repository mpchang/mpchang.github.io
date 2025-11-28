// Google Analytics initialization
// This file loads and configures Google Analytics using the measurement ID from environment variables

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

console.log('GA_MEASUREMENT_ID from env:', GA_MEASUREMENT_ID);
console.log('All env vars:', import.meta.env);

if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    console.log('Initializing Google Analytics with ID:', GA_MEASUREMENT_ID);
    // Create and append the gtag script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    console.log('Loading GA script from:', gtagScript.src);
    document.head.appendChild(gtagScript);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    // Store the measurement ID for use in other modules
    window.GA_MEASUREMENT_ID = GA_MEASUREMENT_ID;
} else {
    console.log('Google Analytics not initialized: No valid measurement ID found');
    console.log('GA_MEASUREMENT_ID value was:', GA_MEASUREMENT_ID);
}
