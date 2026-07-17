/* ==========================================================================
   FRANK'S FRIENDLY CARS MAUI - AUTO-POLLING GLOBAL FOOTER ENGINE
   ========================================================================== */
(function() {
  var attempts = 0;

  function injectFrankFooter() {
    // 1. UNIQUE IDENTIFIER SHIELD: Prevents duplicate injection loops
    if (document.getElementById("frank-global-above-footer")) return;

    // 2. TARGET ANCHOR SELECTION: Finds the native UENI footer boundary block
    var nativeFooter = document.getElementById("footer") || document.querySelector("footer");
    
    // 3. THE AUTO-POLLING FALLBACK LOOP
    if (!nativeFooter) {
      attempts++;
      if (attempts < 50) { // Polls for up to 5 seconds max
        setTimeout(injectFrankFooter, 100); [stackoverflow.com]
        return;
      }
      return; // Stop if page takes too long
    }

    // 4. CONTAINER HOUSING ASSEMBLY: Creates our clean custom section layer
    var globalSection = document.createElement("section");
    globalSection.id = "frank-global-above-footer";
    globalSection.className = "custom-above-footer-section";

    // 5. THE INJECTED MULTI-COLUMN DATA MATRIX
    globalSection.innerHTML = `
      <div class="blended-footer-override-section">
        <div class="footer-grid-row">
          <!-- 
             ==========================================================================
             YOUR EXACT PROVEN HTML MARKUP STORAGE ENGINE
             Replace this placeholder block with your complete, original HTML link grid.
             ==========================================================================
          -->
          <div style="text-align: center; padding: 20px; font-weight: 600; color: #111;">
            [ Your existing, proven multi-column HTML code block executes here ]
          </div>
        </div>
        
        <!-- COPYRIGHT BLOCK: Placed outside flex zones to force true horizontal centering -->
        <div style="width: 100% !important; display: block !important; clear: both !important; text-align: center !important; margin: 40px auto 0 auto !important; padding-top: 15px !important; border-top: 1px solid #d1d5db !important; box-sizing: border-box !important;">
          <p style="font-size: 12px !important; color: #5A413F !important; margin: 0 !important; font-weight: 500 !important; display: block !important; text-align: center !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;">
            &copy; 2026 Frank's Friendly Cars Maui Car Rental LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    `;

    // 6. THE RUNTIME INJECTION: Inserts your clean section right above their link bar
    nativeFooter.parentNode.insertBefore(globalSection, nativeFooter);
  }

  // Run immediately
  injectFrankFooter();
})();
