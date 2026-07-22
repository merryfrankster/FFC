/**
 * Maui Car Rental - Unified Master Control Script (V4 - Verified Redirects)
 * Integrates: 1. Instant Redirects, 2. Dynamic Title / Meta SEO, 3. "About Us" Heading Changer
 * canonical link for reviews
 */

// 1. FORCE THE PAGE TO STAY COMPLETELY HIDDEN IMMEDIATELY
document.documentElement.style.display = 'none';

(function() {
    'use strict';

    // 2. PATH ANALYSIS FOR REDIRECTS AND SEO MATCHING
    var path = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";

    // 3. CORRECT AND VERIFIED REDIRECT CONFIGURATION
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
        //"/services/specials/young-driver-special-age-20-to-24-8-day-150609174": "https://mauicarrental.biz/services/specials/maui-car-rental-under-25-cheap-150614793",
        "/price-list/call-808-280-1196-for-more-info": "https://mauicarrental.biz/faq-s"
    };
 
    // EXECUTE REDIRECT IMMEDIATELY (Stops execution here if matching a redirected path)
    if (redirects[path]) {
        window.location.replace(redirects[path]);
        return; 
    }
	
    // B. SCALABLE CANONICAL OVERWRITE MATRIX (Fixes Near-Duplicate Content)
    const canonicalMap = {
        "/our-reviews": "https://mauicarrental.biz/reviews",
        "/cars-rates": "https://mauicarrental.biz/cars-rates",
        "/blog/4-maui-car-rental-options-for-cruise-ship-passengers-with-insider-tips-june-2024": "https://mauicarrental.biz/services/specials/cruise-ship-special-150490735",
        "/services/specials/maui-kahului-harbor-cruise-port-special-deals-on-car-rental-150496593": "https://mauicarrental.biz/services/specials/cruise-ship-special-150490735",
        "/info-on-renting-a-new-car/4-maui-car-rental-options-for-cruise-ship-passengers-with-insider-tips-june-2024": "https://mauicarrental.biz/services/specials/cruise-ship-special-150490735",
        "/services/specials/young-driver-special-age-20-to-24-8-day-150609174": "https://mauicarrental.biz/services/specials/maui-car-rental-under-25-cheap-150614793"
        // Pro-Tip: Add any new near-duplicate path keys and their main target URLs right here!
    };	

    // 4. PRESERVED DYNAMIC SEO CONFIGURATION
    const seoConfig = {
        "/": { "title": "Maui Car Rental. Kahului Airport & Cruise Port. Discount Deals!", "description": "Maui car rental from $25/day. Pick up at Airport or walk from Cruise Port. Best price on new Jeeps, convertibles, SUV's, minivans, & big discounts on older cars." },
        "/info-on-renting-a-new-car": { "title": "Maui Car Rental - Companies, ratings, locations, vehicles, restrictions - Frank's Friendly Cars", "description": "Rent a new car with low miles. Discount prices from Maui's top car rental companies. No deposit, no pre-payment, no cancellation fee. Exclusive \"Lowest Price Guarantee.\"" },
        "/cars-rates": { "title": "Maui Car Rental: Prices, Special Deals, Online Booking", "description": "Maui car rental from $25/day. Book online or call 808-280-1196 for an instant quote today! Discounts on Jeeps, SUVs, convertibles, and minivans." },
       // "/maui-rental-cars": { "title": "Maui Rental Cars From Top Brands - Discount Deals", "description": "Book online or call 808-280-1196 for discounts on Jeeps, SUVs, convertibles, and minivans. No deposit, no pre-pay, free cancellation." },
        "/terms-and-conditions": { "title": "Maui Car Rental Terms And Conditions Frank's Friendly Cars", "description": "Rates, fees, charges, restrictions, penalties, et cetera. For any questions, please call or email" },
        "/info": { "title": "Maui Car Rental Info From Frank's Friendly Cars", "description": "Explore Maui car rental vehicles, locations, special offers. For any questions, please call 808-280-1196 or email info@mauicarrental.biz." },
        "/blog": { "title": "Maui Car Rental Blog - News, Price Tracker & Forecasts, Special Deals", "description": "Maui car rental news and updates and weekly survey of lowest advertised Maui car rental prices. Historical price data from 2013 to 2018, and from 2023 to the present. Updated weekly." },
        "/merchant-policies": { "title": "Maui Car Rental Merchant Policies Frank's Friendly Cars", "description": "Delivery time, processing options, payment methods. For any questions, please call 808-280-1196 or email info@mauicarrental.biz." },
        "/reviews": { "title": "Maui Car Rental Reviews For Frank's Friendly Cars", "description": "Maui car rental 5-star reviews from Google, Yelp, and Tripadvisor. See why repeat visitors choose us for easy airport pickup and affordable rental rates!" },
        "/our-reviews": { "title": "Maui Car Rental Reviews For Frank's Friendly Cars", "description": "Maui car rental 5-star reviews from Google, Yelp, and Tripadvisor. See why repeat visitors choose us for easy airport pickup and affordable rental rates!" },
        "/contact-us": { "title": "Maui Car Rental Contact Options For Frank's Friendly Cars", "description": "Maui car rental contact info: 808-280-1196, info@mauicarrental.biz, mailing address, request prices/reservations, map & directions, Facebook, Instagram, X/Twitter." },
        "/podcast": { "title": "Maui Car Rental Podcast from Frank's Friendly Cars", "description": "Engaging audio and video cover Maui car rental news, price tracker, special deals, and related information." },
        "/faq-s": { "title": "Maui Car Rental FAQ's For Frank's Friendly Cars", "description": "Maui car rental questions & answers. Pickup and return? Airport? Cruise Port? Prices? Payments? Booking fees? Requirements? Requirements? Restrictions? And much more..." }
    };

    const globalImage = "https://img.uenicdn.com/cdn-cgi/image/width=1280,fit=scale-down,f=auto/image/upload/v1777929271/business/22462d09-da05-411d-a3cc-73074cfcd777.jpg";
    const globalImageHeight = "1200";
    const globalImageWidth = "1200";
    const globalImageAlt = "Frank's Friendly Cars Maui Car Rental LLC";
    const globalLat = "20.8854444";
    const globalLong = "-156.4554722";

    // 5. REVEAL CONTROLLER
    function revealPage() {
        document.documentElement.style.display = '';
    }

	// 6. EXECUTE THE SURGICAL HIJACK FOR META TAGS & CANONICAL OVERRIDES
    const forceSEO = () => {
        // A. Handle Meta Tag Injector if path exists in SEO Config
        const content = seoConfig[path];
        if (content) {
            if (document.title !== content.title) document.title = content.title;
            
            const titleEl = document.querySelector('title');
            if (titleEl) titleEl.removeAttribute('data-react-helmet');

            const enforceSingleTag = (attr, attrVal, contentVal) => {
                const allMatches = document.querySelectorAll(`meta[${attr}="${attrVal}"]`);
                if (allMatches.length > 1) {
                    for (let i = 1; i < allMatches.length; i++) { allMatches[i].remove(); }
                }
                let el = allMatches[0];
                if (!el) {
                    el = document.createElement('meta');
                    el.setAttribute(attr, attrVal);
                    document.head.appendChild(el);
                }
                if (el.getAttribute('content') !== contentVal) { el.setAttribute('content', contentVal); }
                el.removeAttribute('data-react-helmet');
            };

            enforceSingleTag('name', 'description', content.description);
            enforceSingleTag('property', 'og:title', content.title);
            enforceSingleTag('property', 'og:description', content.description);
            enforceSingleTag('property', 'og:image', globalImage);
            enforceSingleTag('property', 'og:image:secure_url', globalImage);
            enforceSingleTag('property', 'og:image:height', globalImageHeight);
            enforceSingleTag('property', 'og:image:width', globalImageWidth);
            enforceSingleTag('property', 'og:image:alt', globalImageAlt);
            enforceSingleTag('property', 'place:location:latitude', globalLat);
            enforceSingleTag('property', 'place:location:longitude', globalLong);
            enforceSingleTag('name', 'twitter:title', content.title);
            enforceSingleTag('name', 'twitter:description', content.description);
            enforceSingleTag('name', 'twitter:image', globalImage);
            enforceSingleTag('name', 'twitter:card', 'summary_large_image');
        }
		
        // B. SCALABLE CANONICAL OVERWRITE MATRIX (Fixed Collection Loop)
        const targetCanonical = canonicalMap[path];
        if (targetCanonical) {
            const existingLinks = document.querySelectorAll('link[rel="canonical"]');
            
            // Matches the working logic of your original successful reviews snippet
            existingLinks.forEach(link => link.remove());
            
            // Instantly injects your preferred canonical target right into the head element
            const newCanonical = document.createElement('link');
            newCanonical.setAttribute('rel', 'canonical');
            newCanonical.setAttribute('href', targetCanonical);
            document.head.appendChild(newCanonical);
        }		
	};
	
	    // D. DYNAMIC SERVICE RATING SCHEMA INJECTOR (WITH SCRAPED DESCRIPTION)
	    const injectServiceRatings = () => {
	        if (window.location.pathname.toLowerCase().includes('/services/specials/')) {
	            if (document.getElementById('frank-service-rating')) return;
	
	            // A. SCRAPE TITLE
	            const targetTitle = document.title || "Maui Car Rental Specials";
	
	            // B. SCRAPE META DESCRIPTION
	            const descEl = document.querySelector('meta[name="description"]') || document.querySelector('meta[property="og:description"]');
	            const targetDesc = descEl ? descEl.getAttribute('content') : "Frank's Friendly Cars Maui Car Rental LLC is trusted by over 398 customers, earning a 4.4-star rating!";
	
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
                    "@context": "https://schema.org/",
                    "@type": "Organization",
                    "@id": "https://www.trustindex.io/reviews/mauicarrental.biz/en",
                    "name": "Frank's Friendly Cars Maui Car Rental LLC",
        			"logo": "https://cdn.trustindex.io/companies/14/14ad92114460gba9/avatar.jpg",
                    "url": "https://mauicarrental.biz",
                    "description": "Frank's Friendly Cars Maui Car Rental LLC is trusted by over 398 customers, earning a 4.4-star rating! Explore real reviews and share your own experience.",
                    "brand": {
                        "@type": "Brand",
                        "@id": "https://mauicarrental.biz",
                        "name": "Frank's Friendly Cars Maui Car Rental LLC"
                    },
                    "address": {
                        "@type": "PostalAddress",
				        "streetAddress": "Kahului Airport, 400 Hana Hwy Shed C",
				        "addressLocality": "Kahului",
				        "addressRegion": "Maui",						
                        "postalCode": "96732",
                        "addressCountry": "US"
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "worstRating": 1,
                    "bestRating": 5,
                    "ratingValue": 4.4,
                    "ratingCount": 398
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

    // Trigger execution and heartbeat loop globally
    forceSEO();
    injectServiceRatings();
    
    let count = 0;
    const heartbeat = setInterval(() => {
        forceSEO();
        injectServiceRatings();
        count++;
        if (count > 30) clearInterval(heartbeat);
    }, 500);

    // 7. EXECUTE DOM MODIFICATIONS (ABOUT US HEADING SWAP)
    function executeDomLogic() {
        if (window.location.href.startsWith('https://mauicarrental.biz/about-us')) {
            var targetHeader = document.querySelector('h2._2iYzkDwt');
            if (targetHeader) {
                var spanElement = targetHeader.querySelector('span');
                if (spanElement && spanElement.textContent.trim() === 'About Us') {
                    spanElement.textContent = 'Maui Car Rental Podcast';
                }
            }
        }
        revealPage();
    }

    // 8. FLOW LOGIC TIMING
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', executeDomLogic);
    } else {
        executeDomLogic();
    }

    // HARD SAFETY TIMEOUT
    setTimeout(revealPage, 1500);
})();
