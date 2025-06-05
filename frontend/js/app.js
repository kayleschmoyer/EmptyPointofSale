if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let idx = 0;
  if (slides.length > 1) {
    setInterval(() => {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 5000);
  }

  const toggle = document.getElementById('planToggle');
  if (toggle) {
    toggle.addEventListener('change', () => {
      const yearly = toggle.checked;
      document.querySelectorAll('.price').forEach(el => {
        const mo = el.dataset.monthly;
        const yr = el.dataset.yearly;
        el.innerHTML = yearly ? `$${yr}<span>/yr</span>` : `$${mo}<span>/mo</span>`;
      });
    });
  }
});
