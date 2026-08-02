/**
 * Maui Car Rental - Unified Master Control Script (V7 - Smart Path Filter)
 * Served via jsDelivr CDN
 */
(function() {
    'use strict';

    // 1. PATH ANALYSIS FOR REDIRECT MATCHING
    var path = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";

    // 2. VERIFIED REDIRECT CONFIGURATION MATRIX
    var redirects = {
        "/contact": "https://mauicarrental.biz/contact-us",
        "/map": "https://mauicarrental.biz/contact-us",
        "/our-reviews": "https://mauicarrental.biz/reviews",
        "/about-us": "https://mauicarrental.biz/contact-us",
        "/services": "https://mauicarrental.biz/cars-rates",
        "/products": "https://mauicarrental.biz/cars-rates",
        "/price-list": "https://mauicarrental.biz/faq-s",
        "/merchant-policies": "https://mauicarrental.biz/faq-s",
        "/legal-notice": "https://mauicarrental.biz/faq-s",
        "/refund-policy": "https://mauicarrental.biz/faq-s",
        "/privacy-policy": "https://mauicarrental.biz/faq-s",
        "/terms-and-conditions": "https://mauicarrental.biz/faq-s",
		"/booking": "https://mauicarrental.biz/cars-rates",
		"/services/used-local-cars-for-rent-in-maui/full-size-suv-used-150428711": "https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/full-size-suv-used-150428711",
		"/services/specials/long-term-rental-150490737": "https://mauicarrental.biz/services/specials/long-term-rental-maui-cars-150490737",
        //"/services/specials/young-driver-special-age-20-to-24-8-day-150609174": "https://mauicarrental.biz/services/specials/maui-car-rental-under-25-cheap-150614793",
        "/price-list/call-808-280-1196-for-more-info": "https://mauicarrental.biz/faq-s"
    };
 
    // 3. IF A REDIRECT MATCHES, INJECT BLANKOUT STYLE AND TRIGGER REDIRECT IMMEDIATELY
    if (redirects[path]) {
        // Create an absolute visual blankout style
        var css = 'html { display: none !important; opacity: 0 !important; background: #ffffff !important; }';
        var style = document.createElement('style');
        style.type = 'text/css';
        
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        
        // Force inject it into the top element instantly to kill the 404 page render pass
        (document.head || document.documentElement).appendChild(style);

        // Perform the instant client-side forward
        window.location.replace(redirects[path]);
        return; 
    }

    // 4. FOR VALID PATHS: NO STYLES ARE HIDDEN, SO NO REVEAL LIFECYCLE IS NEEDED
    // The script cleanly exits here, meaning regular pages load with zero interference!
})();
