
(function(){
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf('/')+1) || 'index.html';

  // Active link highlight
  document.querySelectorAll('.ft-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const target = href.substring(href.lastIndexOf('/')+1) || href;
    if (target && (file === target || (file==='index.html' && href==='index.html#services'))) {
      a.classList.add('active');
    }
  });

  // Mega menu
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

  // Mobile
  const burger = document.querySelector("[data-ft-burger]");
  const mobile = document.querySelector("[data-ft-mobile]");
  const mobileServices = document.querySelector("[data-ft-mobile-services]");
  const mobileServicesPanel = document.querySelector("[data-ft-mobile-services-panel]");
  if (burger && mobile) burger.addEventListener("click", () => mobile.classList.toggle("hidden"));
  if (mobileServices && mobileServicesPanel) mobileServices.addEventListener("click", () => mobileServicesPanel.classList.toggle("hidden"));

  // Explore Services: always to home #services + smooth scroll if on home
  function scrollToId(id, offset){
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - (offset || 90);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  const selectors = ['#exploreServices','.js-explore-services','a[href$="#services"]','button[data-target="#services"]'];
  const nodes = Array.from(document.querySelectorAll(selectors.join(',')));
  nodes.forEach((node) => {
    node.addEventListener('click', function(e){
      // Always route to index.html#services
      e.preventDefault();
      if (file === '' || file === 'index.html') {
        scrollToId('services', 90);
      } else {
        window.location.href = 'index.html#services';
      }
    }, { passive: false });
  });

  // Year in footer
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
