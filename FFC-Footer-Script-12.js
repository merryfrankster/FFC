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
            overlay.style.height = '100%';
            overlay.style.backgroundColor = '#e5e7eb';
            overlay.style.borderTop = '1px solid #111111';
            overlay.style.zIndex = '99999'; 
            overlay.style.padding = '40px 20px 25px 20px';
            overlay.style.boxSizing = 'border-box';
            overlay.style.overflow = 'auto'; // Allows vertical scroll if content is tall
            overlay.style.display = 'block';

            // PASTE YOUR RAW HTML COPY INSIDE THE BACKTICKS BELOW:
            var fullCustomHtml = `
            
      <!-- COLUMN 1: BRAND COPY & CONCIERGE NAVIGATION -->
      <div class="MuiGrid-root MuiGrid-item" style="flex: 1 1 210px !important; max-width: 250px !important; text-align: left !important; padding: 0 !important; margin: 0 !important;">
        <h4>Frank's Friendly Cars<br>Maui Car Rental LLC</h4>
                <p>Trusted local provider of <a href="https://mauicarrental.biz">Maui car rental</a> since 2006. 
				Affordable, dependable, well-maintained cars. Personalized service with cars available for easy 
				pick-up and return at Maui Kahului Airport
				and Cruise Port. Guaranteed reservations with cheap discount rates.</p>
        <ul>
                    <li><a href="https://mauicarrental.biz/contact-us">Contact Us</a></li>
                    <li><a href="https://mauicarrental.biz/#topHash">Get a Price (any car)</a></li>
                    <li><a href="https://rentals.mauicarrental.biz">Book Online (new cars)</a></li>
					<li><a href="https://mauicarrental.biz/about-us/top-ten-things-people-look-for-from-frank-s-friendly-cars-6619962">Maui Car Rental Top 10</a></li>
        </ul>
      </div>

      <!-- COLUMN 2: GEO-AUTHORITATIVE SERVICE LOCATIONS -->
      <div class="MuiGrid-root MuiGrid-item" style="flex: 1 1 180px !important; max-width: 220px !important; text-align: left !important; padding: 0 !important; margin: 0 !important;">
        <h4>Maui Car Rental Specials</h4>
        <ul>
                    <li><a href="https://mauicarrental.biz/services/specials/airport-special-150605423">Car Rental Maui Airport</a></li>
                    <li><a href="https://mauicarrental.biz/services/specials/cruise-ship-special-150490735">Car Rental Maui Cruise Port</a></li>
                    <li><a href="https://mauicarrental.biz/services/specials/rent-a-cheap-local-maui-rental-car-150491964">Affordable Local Car Rental</a></li>
                    <li><a href="https://mauicarrental.biz/services/specials/discounts-on-new-maui-rental-cars-150491950">Deals On New Cars</a></li>
                    <li><a href="https://mauicarrental.biz/services/specials/long-term-rental-maui-cars-150490737">Long Term Maui Car Rental</a></li>
                    <li><a href="https://mauicarrental.biz/services/specials/rent-a-car-now-maui-only-150490734">Same Day Maui Car Rental</a></li>
		            <li><a href="https://mauicarrental.biz/services/specials/maui-car-rental-under-25-cheap-150614793">Maui Car Rental Under 25</a></li>
		            <li><a href="https://mauicarrental.biz/services/specials/maui-rental-car-deals-for-international-travelers-including-insurance-150538030">International Discount Car Rental With Insurance</a></li>
		            <li><a href="https://mauicarrental.biz/services/specials/cheapest-car-rental-in-maui-just-25-out-the-door-150490736"
        </ul>
      </div>

      <!-- COLUMN 3: TRANSACTIONAL FLEET AND VALUE PHRASES -->
      <div class="MuiGrid-root MuiGrid-item" style="flex: 1 1 180px !important; max-width: 220px !important; text-align: left !important; padding: 0 !important; margin: 0 !important;">
        <h4>Maui Car Rental Info</h4>
        <ul>
                    <li><a href="https://mauicarrental.biz/info/">General Info</a></li>
                    <li><a href="https://mauicarrental.biz/faq-s/">Frequently Asked Questions</a></li>
                    <li><a href="https://mauicarrental.biz/reviews/">Maui Car Rental Reviews</a></li>
                    <li><a href="https://mauicarrental.biz/info-on-renting-a-new-car/">Renting A New Car In Maui</a></li>
                    <li><a href="https://mauicarrental.biz/blog/">Maui Car Rental Blog</a></li>
                    <li><a href="https://mauicarrental.biz/podcast/">Maui Car Rental Podcast</a></li>
        </ul>
      </div>

      <!-- COLUMN 4: NEW CAR DIRECTORY -->
      <div class="MuiGrid-root MuiGrid-item" style="flex: 1 1 140px !important; max-width: 180px !important; text-align: left !important; padding: 0 !important; margin: 0 !important;">
        <h4>New Cars</h4>
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
      <div class="MuiGrid-root MuiGrid-item" style="flex: 1 1 140px !important; max-width: 180px !important; text-align: left !important; padding: 0 !important; margin: 0 !important;">
        <h4>Affordable <br>Older Cars</h4>
        <ul>
          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/economy-car-used-150428705">Economy</a></li>
          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/mid-size-car-used-150428709">Mid-size</a></li>
          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/small-suv-used-150428706">Small SUV</a></li>
          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/regular-suv-used-150428707">Standard SUV</a></li>
          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/deluxe-suv-used-150428708">Deluxe SUV</a></li>
          <li><a href="https://mauicarrental.biz/services/cheap-local-cars-for-rent-in-maui/mini-van-used-150428710">Minivan</a></li>
        </ul>
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
