
(function(){"use strict";
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf('/')+1) || 'index.html';
  document.querySelectorAll('.ft-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const target = href.substring(href.lastIndexOf('/')+1) || href;
    if (target && (file === target || (file==='index.html' && href==='index.html#services'))) {
      a.classList.add('active');
    }
  });
  const trigger = document.querySelector("[data-ft-services-trigger]");
  const panel = document.querySelector("[data-ft-services-panel]");
  function openP(){ if(panel){ panel.classList.add("visible","opacity-100"); panel.classList.remove("invisible","opacity-0"); } }
  function closeP(){ if(panel){ panel.classList.remove("visible","opacity-100"); panel.classList.add("invisible","opacity-0"); } }
  if (trigger && panel) {
    trigger.addEventListener("mouseenter", openP);
    trigger.addEventListener("focus", openP);
    panel.addEventListener("mouseenter", openP);
    trigger.addEventListener("mouseleave", () => setTimeout(() => { if(!panel.matches(":hover")) closeP(); }, 120));
    panel.addEventListener("mouseleave", () => setTimeout(() => { if(!trigger.matches(":hover")) closeP(); }, 120));
    document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeP(); });
  }
  const burger = document.querySelector("[data-ft-burger]");
  const mobile = document.querySelector("[data-ft-mobile]");
  const mobileServices = document.querySelector("[data-ft-mobile-services]");
  const mobileServicesPanel = document.querySelector("[data-ft-mobile-services-panel]");
  if (burger && mobile) burger.addEventListener("click", () => mobile.classList.toggle("hidden"));
  if (mobileServices && mobileServicesPanel) mobileServices.addEventListener("click", () => mobileServicesPanel.classList.toggle("hidden"));
  const servicesBtn = document.querySelector('[data-ft-services-btn]');
  if (servicesBtn) {
    servicesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (file === '' || file === 'index.html') {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior:'smooth' });
      } else {
        window.location.href = 'index.html#services';
      }
    });
  }
})();
