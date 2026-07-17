(function() {
    function integrateFrankOverlayFooter() {
        var cmsFooter = document.getElementById('footer');
        if (!cmsFooter) return;

        // 1. Ensure the original CMS footer is relatively positioned so our mask aligns to it
        cmsFooter.style.setProperty('position', 'relative', 'important');
        cmsFooter.style.setProperty('min-height', '120px', 'important'); // Gives it baseline space

        // 2. Check if our custom overlay mask is already there
        if (!document.getElementById('frank-overlay-footer')) {
            
            // Create a clean overlay container
            var overlay = document.createElement('div');
            overlay.id = 'frank-overlay-footer';
            
            // CSS absolute overlay styles (This acts as a visual mask)
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = '#e5e7eb';
            overlay.style.borderTop = '1px solid #111111';
            overlay.style.zIndex = '99999'; // Forces it on top of everything inside the footer
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            
            // Add your "Hello World!" text securely
            var innerText = document.createElement('div');
            innerText.style.fontSize = '24px';
            innerText.style.color = '#ff0000';
            innerText.style.fontWeight = 'bold';
            innerText.appendChild(document.createTextNode('Hello World!'));
            
            overlay.appendChild(innerText);

            // 3. Append the overlay directly INSIDE the footer wrapper
            // This bypasses the hierarchy issues we faced earlier
            cmsFooter.appendChild(overlay);
        }
    }

    function setupGuard() {
        var cmsFooter = document.getElementById('footer');
        if (cmsFooter) {
            integrateFrankOverlayFooter();

            // Watch the footer. If React updates and deletes our mask, put it right back.
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
