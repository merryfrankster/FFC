// D. DYNAMIC SERVICE RATING SCHEMA INJECTOR (WITH MULTI-PATH SUPPORT)
const injectServiceRatings = () => {
    const currentPath = window.location.pathname.toLowerCase();
    
    // Add any additional path patterns to this array
    const validPaths = [
        '/services/specials/',
        '/services/cheap-local-cars-for-rent-in-maui/',           
        '/services/discounts-on-new-rental-cars-in-maui/'    
    ];

    // Check if the current URL matches any of the paths in our list
    const isMatchingPath = validPaths.some(path => currentPath.includes(path.toLowerCase()));

    if (isMatchingPath) {
        if (document.getElementById('frank-service-rating')) return;

        // A. SCRAPE TITLE
        const targetTitle = document.title || "Maui Car Rental Specials";

        // B. SCRAPE META DESCRIPTION
        const descEl = document.querySelector('meta[name="description"]') || document.querySelector('meta[property="og:description"]');
        const targetDesc = descEl ? descEl.getAttribute('content') : "Frank's Friendly Cars Maui Car Rental LLC is trusted by over 397 customers, earning a 4.4-star rating!";

        // C. TARGET DESIGN ENGINE
        const cleanRatingObj = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": targetTitle,
	        "image": "https://cdn.trustindex.io/companies/14/14ad92114460gba9/avatar.jpg",
            "url": window.location.href,
            "sku": "14ad92114460gba9",
            /* UPDATED: Injects your page's live, unique meta description */
            "description": targetDesc,
            "manufacturer": {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.trustindex.io/reviews/mauicarrental.biz/en",
                "name": "Frank's Friendly Cars Maui Car Rental LLC",
        		"logo": "https://cdn.trustindex.io/companies/14/14ad92114460gba9/avatar.jpg",
                "url": "https://mauicarrental.biz",
                "description": "Frank's Friendly Cars Maui Car Rental LLC is trusted by over 397 customers, earning a 4.4-star rating! Explore real reviews and share your own experience.",
                "brand": {
                    "@type": "Brand",
                    "@id": "https://mauicarrental.biz",
                    "name": "Frank's Friendly Cars Maui Car Rental LLC"
                },
                "address": {
                    "@type": "PostalAddress",
                    "@id": "https://mauicarrental.biz#FFC-address",
                    "streetAddress": "400 Hana Hwy Shed C",
                    "addressLocality": "Kahului",
                    "addressRegion": "HI",
                    "postalCode": "96732",
                    "addressCountry": "US"
                }
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "worstRating": 1,
                "bestRating": 5,
                "ratingValue": 4.4,
                "ratingCount": 397
            }
        };

        // 4. MOUNT ENGINE: Appends the completed dataset directly to the bottom floor of the document head
        const scriptNode = document.createElement('script');
        scriptNode.id = 'frank-service-rating';
        scriptNode.type = 'application/ld+json';
        scriptNode.text = JSON.stringify(cleanRatingObj);
        document.head.appendChild(scriptNode);
    }
};

// HEARTBEAT EXECUTION TIMERS
injectServiceRatings();
let serviceCount = 0;
const serviceHeartbeat = setInterval(() => {
    injectServiceRatings();
    serviceCount++;
    if (serviceCount > 30) clearInterval(serviceHeartbeat);
}, 500);
