(function() {
    function integrateFrankOverlayFooter() {
        var cmsFooter = document.getElementById('footer');
        if (!cmsFooter) return;

        // Ensure the original CMS footer acts as our anchor layout boundary
        cmsFooter.style.setProperty('position', 'relative', 'important');
        cmsFooter.style.setProperty('min-height', '320px', 'important'); 

        // Inject the production content mask if it isn't already rendering
        if (!document.getElementById('frank-overlay-footer')) {
            
            var overlay = document.createElement('div');
            overlay.id = 'frank-overlay-footer';
            
            // Layout masking configurations
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = 'auto'; 
            overlay.style.backgroundColor = '#e5e7eb';
            overlay.style.borderTop = '1px solid #111111';
            overlay.style.zIndex = '99999'; 
            
            // Default desktop layout padding
            overlay.style.padding = '10px 20px 25px 20px';
            overlay.style.boxSizing = 'border-box';
            overlay.style.display = 'block';

            // Clean typography and layout stylesheet rules
            if (!document.getElementById('frank-typography-override-styles')) {
                var css = 
                    /* List cleanup: kill bullets and force absolute left alignment */
                    "#frank-overlay-footer ul { list-style: none !important; list-style-type: none !important; padding: 0 !important; margin: 4px 0 0 0 !important; text-align: left !important; } " +
                    "#frank-overlay-footer li { list-style: none !important; list-style-type: none !important; padding: 0 !important; margin: 0 0 6px 0 !important; text-align: left !important; } " +
                    /* Hyperlink specifications: no underline, transitions to coral on hover */
                    "#frank-overlay-footer a { text-decoration: none !important; color: #5A413F !important; transition: color 0.15s ease-in-out !important; display: inline-block !important; text-align: left !important; } " +
                    "#frank-overlay-footer a:hover { color: #f79c5e !important; text-decoration: none !important; } " +
                    /* Tighten layout headings and paragraph structural boundaries */
                    "#frank-overlay-footer h4 { margin-top: 0 !important; margin-bottom: 4px !important; text-align: left !important; } " +
                    "#frank-overlay-footer p { text-align: left !important; margin-top: 0 !important; } " +
                    
                    /* MOBILE RESPONSIVE BREAKPOINT LAYER */
                    "@media (max-width: 600px) { " +
                    "  #frank-overlay-footer { padding: 20px 15px !important; } " +
                    "  #frank-overlay-footer .frank-col { flex: 1 1 100% !important; max-width: 100% !important; margin-bottom: 24px !important; } " +
                    "}";
                
                var styleNode = document.createElement('style');
                styleNode.id = 'frank-typography-override-styles';
                styleNode.appendChild(document.createTextNode(css));
                document.head.appendChild(styleNode);
            }

            // PASTE YOUR RAW HTML COPY INSIDE THE BACKTICKS BELOW:
            var fullCustomHtml = `
            
            <div class="blended-footer-override MuiContainer-root _2FNG3lay _3dYZ8s64 MuiContainer-maxWidthXl" style="max-width: 1240px !important; width: 100% !important; padding-left: 20px !important; padding-right: 20px !important; box-sizing: border-box !important; background: transparent !important; margin: 0 auto !important;">
                <div class="MuiGrid-root MuiGrid-container">
                  <!-- COLUMN 1: BRAND COPY & CONCIERGE NAVIGATION -->
				  <div class="MuiGrid-root MuiGrid-item" style="flex: 1.3 1 200px !important; min-width: 200px !important; max-width: 260px !important; text-align: left !important; padding: 0 !important; margin: 0 !important; box-sizing: border-box !important;">
			        <h2>Frank's Friendly Cars<br>Maui Car Rental LLC</h2>
		                <p><span data-nosnippet>Trusted local provider of <a href="https://mauicarrental.biz">Maui car rental</a> since 2006. 
						Affordable, dependable, well-maintained cars. Personalized service with cars available for easy 
						pick-up and return at Maui Kahului Airport
						and Cruise Port. Guaranteed reservations with cheap discount rates.</span></p>
			        <ul>
	                    <li><a href="https://www.google.com/preferences/source?q=mauicarrental.biz">Save this website</a></li>
	                    <li><a href="https://mauicarrental.biz/contact-us">Contact Us</a></li>
	                    <li><a href="https://mauicarrental.biz/cars-rates">Get a Price (any car)</a></li>
	                    <li><a href="https://rentals.mauicarrental.biz">Book Online (new cars)</a></li>
						<li><a href="https://mauicarrental.biz/about-us/top-ten-things-people-look-for-from-frank-s-friendly-cars-6619962">Maui Car Rental Top 10</a></li>
			        </ul>
                  </div>

                  <!-- COLUMN 2: GEO-AUTHORITATIVE SERVICE LOCATIONS -->
				  <div class="MuiGrid-root MuiGrid-item" style="flex: 1 1 170px !important; min-width: 170px !important; max-width: 230px !important; text-align: left !important; padding: 0 !important; margin: 0 !important; box-sizing: border-box !important;">
                    <h3>Maui Car Rental Specials</h3>
                    <ul>
	                    <li><a href="https://mauicarrental.biz/services/specials/airport-special-150605423">Kahului Airport Pickup</a></li>
	                    <li><a href="https://mauicarrental.biz/services/specials/cruise-ship-special-150490735">Maui Cruise Port Pickup</a></li>
	                    <li><a href="https://mauicarrental.biz/services/specials/rent-a-cheap-local-maui-rental-car-150491964">Affordable Older Cars</a></li>
	                    <li><a href="https://mauicarrental.biz/services/specials/discounts-on-new-maui-rental-cars-150491950">Deals On New Cars</a></li>
	                    <li><a href="https://mauicarrental.biz/services/specials/long-term-rental-maui-cars-150490737">Long Term Rentals</a></li>
	                    <li><a href="https://mauicarrental.biz/services/specials/rent-a-car-now-maui-only-150490734">Same Day Rentals</a></li>
			            <li><a href="https://mauicarrental.biz/services/specials/maui-car-rental-under-25-cheap-150614793">Drivers Under 25</a></li>
			            <li><a href="https://mauicarrental.biz/services/specials/maui-rental-car-deals-for-international-travelers-including-insurance-150538030">International Drivers & Insurance</a></li>
			            <li><a href="https://mauicarrental.biz/services/specials/cheapest-car-rental-in-maui-just-25-out-the-door-150490736">$25/day Special</a></li>
                    </ul>
                  </div>

                  <!-- COLUMN 3: TRANSACTIONAL FLEET AND VALUE PHRASES -->
				  <div class="MuiGrid-root MuiGrid-item" style="flex: 1 1 170px !important; min-width: 170px !important; max-width: 230px !important; text-align: left !important; padding: 0 !important; margin: 0 !important; box-sizing: border-box !important;">
                    <h3>Maui Car Rental Info</h3>
                    <ul>
	                    <li><a href="https://mauicarrental.biz/cars-rates">Fllet & Rates</a></li>
	                    <li><a href="https://mauicarrental.biz/info">General Info</a></li>
	                    <li><a href="https://mauicarrental.biz/faq-s">Frequently Asked Questions</a></li>
	                    <li><a href="https://mauicarrental.biz/reviews">Customer Reviews</a></li>
	                    <li><a href="https://mauicarrental.biz/info-on-renting-a-new-car">Guide To New Car Fleet</a></li>
	                    <li><a href="https://mauicarrental.biz/blog">Our Blog</a></li>
	                    <li><a href="https://mauicarrental.biz/podcast">Our Podcast</a></li>
                    </ul>
                  </div>

                  <!-- COLUMN 4: NEW CAR DIRECTORY -->
				  <div class="MuiGrid-root MuiGrid-item" style="flex: 1 1 170px !important; min-width: 170px !important; max-width: 230px !important; text-align: left !important; padding: 0 !important; margin: 0 !important; box-sizing: border-box !important;">
                    <h3>New Cars</h3>
                    <ul>
			          <li><a href="https://mauicarrental.biz/services/discounts-on-new-rental-cars-in-maui/rent-a-new-compact-car-in-maui-discounts-150490744">Compact/Economy</a></li>
			          <li><a href="#">Mid-size</a></li>
			          <li><a href="https://mauicarrental.biz/services/discounts-on-new-rental-cars-in-maui/rent-a-new-jeep-wrangler-in-maui-discounts-150490738">Jeep</a></li>
			          <li><a href="https://mauicarrental.biz/services/discounts-on-new-rental-cars-in-maui/rent-a-new-convertible-in-maui-discounts-150490739">Convertible</a></li>
			          <li><a href="#">Small SUV</a></li>
			          <li><a href="https://mauicarrental.biz/services/discounts-on-new-rental-cars-in-maui/rent-a-new-suv-in-maui-discounts-150490741">Standard SUV</a></li>
			          <li><a href="#">Large SUV (6-7)</a></li>
			          <li><a href="https://mauicarrental.biz/services/discounts-on-new-rental-cars-in-maui/rent-a-new-mini-van-in-maui-discounts-150490766">Minivan</a></li>
			          <li><a href="https://mauicarrental.biz/services/discounts-on-new-rental-cars-in-maui/rent-a-new-12-passenger-van-in-maui-discounts-150490767">Large Van (10-12)</a></li>
			          <li><a href="https://mauicarrental.biz/services/discounts-on-new-rental-cars-in-maui/rent-a-new-truck-in-maui-discounts-150490768">Truck</a></li>
			          <li><a href="https://mauicarrental.biz/services/discounts-on-new-rental-cars-in-maui/rent-a-new-electric-vehicle-in-maui-discounts-150490769">Electric/Hybrid</a></li>
			          <li><a href="#">Luxury/Premium</a></li>
                  </ul>
                  </div>
             
                  <!-- COLUMN 5: AFFORDABLE OLDER CAR DIRECTORY -->
				  <div class="MuiGrid-root MuiGrid-item" style="flex: 1 1 170px !important; min-width: 170px !important; max-width: 230px !important; text-align: left !important; padding: 0 !important; margin: 0 !important; box-sizing: border-box !important;">
                    <h3>Affordable <br>Older Cars</h3>
                    <ul>
			          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/economy-car-used-150428705">Economy</a></li>
			          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/mid-size-car-used-150428709">Mid-size</a></li>
			          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/small-suv-used-150428706">Small SUV</a></li>
			          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/regular-suv-used-150428707">Standard SUV</a></li>
			          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/deluxe-suv-used-150428708">Deluxe SUV</a></li>
			          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/mini-van-used-150428710">Minivan</a></li>
			         </ul>
                  </div>				  
                </div>
            </div>
            <!-- CORRECTED CONTENT BLOCK: Placed outside flex zones to force true horizontal centering -->
            <div style="width: 100% !important; display: block !important; clear: both !important; text-align: center !important; margin: 25px auto 0 auto !important; padding-top: 5px !important; box-sizing: border-box !important;">
                <p style="font-size: 12px !important; color: #5A413F !important; margin: 0 !important; font-weight: 500 !important; display: block !important; text-align: center !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;">
                    &copy; 2026 Frank's Friendly Cars Maui Car Rental LLC. All Rights Reserved.
                </p>
            </div>
            
            `;
            
            // Inject your exact raw code into the mask container
            overlay.innerHTML = fullCustomHtml;

            // Inject the completed composite mask directly onto the CMS footer node
            cmsFooter.appendChild(overlay);
        }
    }

    function setupGuard() {
        var cmsFooter = document.getElementById('footer');
        if (cmsFooter) {
            integrateFrankOverlayFooter();

            // Setup MutationObserver to shield against React wipes
            var observer = new MutationObserver(function(mutations) {
                observer.disconnect();
                integrateFrankOverlayFooter();
                observer.observe(cmsFooter, { childList: true, subtree: false });
            });
            observer.observe(cmsFooter, { childList: true, subtree: false });
        } else {
            setTimeout(setupGuard, 100);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupGuard);
    } else {
        setupGuard();
    }
})();
