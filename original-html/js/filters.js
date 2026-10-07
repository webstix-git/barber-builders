(() => {
  const bar = document.querySelector('.filter-bar');
  if (!bar) return;

  const content = bar.nextElementSibling;
  const inputs = document.querySelectorAll('.filter-input');
  const gap = parseFloat(getComputedStyle(bar).marginBottom);

  // A shorter filtered list can leave the reader below it, so bring its top back under the bar.
  const revealContent = () => {
    const offset = content.getBoundingClientRect().top - (bar.getBoundingClientRect().bottom + gap);
    if (offset < 0) window.scrollBy({ top: offset });
  };

  inputs.forEach((input) => input.addEventListener('change', revealContent));
})();
