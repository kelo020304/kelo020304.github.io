(() => {
  // Paste the d= value from the embed code issued for https://kelo020304.github.io/.
  // This is a public widget ID, not an account password or API secret.
  const widgetId = 'Zm6IDxN1KKB_dfPg8Z7QkYISJMKL2H0GA-6MAEXQSjw';
  const section = document.querySelector('#visitors');
  const container = document.querySelector('#visitor-map');
  const status = document.querySelector('#visitor-map-status');

  // Keep the section hidden until a site-specific counter is configured.
  if (!widgetId || !section || !container || !status) return;
  section.hidden = false;

  // Local previews must not add visits to the public counter.
  if (location.hostname !== 'kelo020304.github.io') {
    container.hidden = true;
    status.textContent = 'Visitor statistics are available on the live homepage.';
    return;
  }

  const script = document.createElement('script');
  script.id = 'mapmyvisitors';
  script.async = true;
  script.src = 'https://mapmyvisitors.com/map.js?' + new URLSearchParams({
    d: widgetId, w: 'a', t: 'tt', cl: 'eeeeee', co: 'ffffff',
    cmo: 'f5b0ad', cmn: 'e10600', ct: '64646e'
  });

  // Wait for actual visitor data, not just the external script's load event.
  let timeout;
  const observer = new MutationObserver(() => {
    const counter = container.querySelector('.mapmyvisitors-visitors');
    if (counter && /\d/.test(counter.textContent)) {
      status.hidden = true;
      clearTimeout(timeout);
      observer.disconnect();
    }
  });
  const showUnavailable = () => {
    observer.disconnect();
    clearTimeout(timeout);
    container.hidden = true;
    status.textContent = 'The visitor map is temporarily unavailable. Please try again later.';
  };
  observer.observe(container, { childList: true, subtree: true, characterData: true });
  script.onerror = showUnavailable;
  timeout = setTimeout(showUnavailable, 20000);
  // Inject once per page visit; resizing must not create extra page views.
  container.appendChild(script);
})();
