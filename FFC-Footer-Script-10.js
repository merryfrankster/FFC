(function() {
    function injectFrankCSSFooter() {
        // Check if our custom CSS layer is already active in the document head
        if (!document.getElementById('frank-permanent-footer-css')) {
            
            // Construct the CSS rules
            // 1. Hide the original content inside the UENI footer container
            // 2. Inject "Hello World!" visually using the browser's native CSS paint engine
            var cssStyleRules = 
                "section._1Qm0BRVI.zKe_PGFf .MuiGrid-container { display: none !important; } " +
                "section._1Qm0BRVI.zKe_PGFf div.MuiContainer-root._3dYZ8s64::after { " +
                "  content: 'Hello World!' !important; " +
                "  display: block !important; " +
                "  font-size: 24px !important; " +
                "  color: #ff0000 !important; " +
                "  font-weight: bold !important; " +
                "  text-align: center !important; " +
                "  padding: 40px 20px !important; " +
                "  background-color: #e5e7eb !important; " +
                "  border-top: 1px solid #111111 !important; " +
                "  width: 100% !important; " +
                "  box-sizing: border-box !important; " +
                "}";

            var styleElement = document.createElement('style');
            styleElement.id = 'frank-permanent-footer-css';
            styleElement.type = 'text/css';
            styleElement.appendChild(document.createTextNode(cssStyleRules));
            
            // Append directly to the document head where the CMS layout engine never looks
            document.head.appendChild(styleElement);
        }
    }

    // Run the injection immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectFrankCSSFooter);
    } else {
        injectFrankCSSFooter();
    }
})();
