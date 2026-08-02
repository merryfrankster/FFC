// 1. FORCE THE PAGE TO STAY COMPLETELY HIDDEN IMMEDIATELY TO PREVENT FLICKER
document.documentElement.style.display = 'none';

(function() {
    'use strict';

    // 2. PATH ANALYSIS FOR REDIRECT MATCHING
    var path = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";

    // 3. VERIFIED REDIRECT CONFIGURATION Matrix
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
 
    // EXECUTE REDIRECT IMMEDIATELY (Stops execution here if matching a redirected path)
    if (redirects[path]) {
        window.location.replace(redirects[path]);
        return; 
    }

    // 4. REVEAL CONTROLLER
    function revealPage() {
        if (document.documentElement.style.display === 'none') {
            document.documentElement.style.display = '';
        }
    }

	// 5. EXECUTE VISIBILITY LIFECYCLE
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', revealPage);
    } else {
        revealPage();
    } 

    // HARD SAFETY TIMEOUT (Runs entirely in the background; does not block page loading assets)
    setTimeout(revealPage, 1500);
})();
