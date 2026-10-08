/* Pointer spotlight for cards: sets --mx/--my so theme.css can place a soft glow under the cursor. */
(() => {
  if (!matchMedia('(hover: hover)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sel = '.work__item, .timeline__item, .edu__item';
  document.addEventListener('pointermove', (e) => {
    const c = e.target.closest && e.target.closest(sel);
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', e.clientX - r.left + 'px');
    c.style.setProperty('--my', e.clientY - r.top + 'px');
  }, { passive: true });
})();
