<!-- ==========================================================================
     1. SYSTEM TEXT MODAL HOUSING ELEMENTS (Decoupled Namespace Tree)
     ========================================================================== -->
<div class="modal-txt-engine" id="textGridModalOnly">
  <div class="modal-content-txt">
    <span class="modal-close-txt" id="closeTextModalOnly">&times;</span>
    <!-- Local distinct data mount nodes -->
    <h2 id="modalHeadingTextOnly" style="font-size: 20px !important; font-weight: 700 !important; color: #111111 !important; margin: 0 0 15px 0 !important; line-height: 1.4 !important; text-align: left !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;"></h2>
    <div id="modalBodyTextOnly" style="font-size: 14.5px !important; line-height: 1.6 !important; color: #333333 !important; text-align: left !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;"></div>
  </div>
</div>

<!-- ==========================================================================
     2. ISOLATED CONTROLLER SCRIPT ENGINE (Protects Carousel Scopes)
     ========================================================================== -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  (function() {
    // Queries are bound strictly to isolated text engine IDs
    const txtModal = document.getElementById("textGridModalOnly"),
          txtHeading = document.getElementById("modalHeadingTextOnly"),
          txtBody = document.getElementById("modalBodyTextOnly"),
          txtCloseBtn = document.getElementById("closeTextModalOnly"),
          txtTriggers = document.querySelectorAll(".modal-trigger-btn");

    if (!txtModal || !txtHeading || !txtBody || !txtCloseBtn) return;

    // Local loop isolates click captures away from your carousel elements
    txtTriggers.forEach(btn => {
      btn.addEventListener("click", function(e) {
        e.stopPropagation();
        const card = btn.closest(".s-t-c-comb");
        if (!card) return;
        
        const heading = card.querySelector("h2") || card.querySelector("h3"),
              content = card.querySelector(".s-t-c-exp-content-comb");
              
        if (heading && content) {
          txtHeading.textContent = heading.textContent;
          txtBody.innerHTML = content.innerHTML;
          txtModal.classList.add("text-modal-active"); /* Local class switch avoids carousel locks */
        }
      });
    });

    // Close mechanics are completely sandboxed to the text layout block
    txtCloseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      txtModal.classList.remove("text-modal-active");
    });

    txtModal.addEventListener("click", function(e) {
      // Closes only if clicking the dark overlay screen container itself
      if (e.target === txtModal) {
        txtModal.classList.remove("text-modal-active");
      }
    });
  })();
});
</script>