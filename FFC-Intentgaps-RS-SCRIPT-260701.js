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
