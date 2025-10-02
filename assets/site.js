
(function(){
  const path = window.location.pathname;
  let file = path.substring(path.lastIndexOf('/')+1);
  if (!file) file = 'index.html';
  const servicePages = new Set(['heating.html','ac.html','electrical.html','generators.html']);
  document.querySelectorAll('.ft-nav a').forEach(a => a.classList.remove('active'));
  const servicesTopLink = document.querySelector('[data-ft-services-trigger] > a[href*="index.html#services"]');
  if (servicePages.has(file)) {
    if (servicesTopLink) servicesTopLink.classList.add('active');
  } else {
    document.querySelectorAll('.ft-nav a').forEach(a => {
      const href = a.getAttribute('href') || '';
      const hrefNoHash = href.split('#')[0];
      if (file === 'index.html' && window.location.hash === '#services' && href.includes('index.html#services')) {
        a.classList.add('active'); return;
      }
      if (hrefNoHash && (path.endsWith(hrefNoHash) || hrefNoHash.endsWith(file))) {
        a.classList.add('active');
      }
    });
  }
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
  // Explore Services routing
  function scrollToId(id, offset){
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - (offset || 90);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  const selectors = ['#exploreServices','.js-explore-services','a[href$="#services"]','button[data-target="#services"]'];
  Array.from(document.querySelectorAll(selectors.join(','))).forEach(node => {
    node.addEventListener('click', function(e){
      e.preventDefault();
      if (file === 'index.html') { scrollToId('services', 90); }
      else { window.location.href = 'index.html#services'; }
    }, { passive: false });
  });
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
