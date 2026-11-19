// Achievements: show an "Achievement unlocked" toast when a badge is clicked
(() => {
  const toast = document.getElementById('ach-toast');
  if (!toast) return;

  const toastImg = document.getElementById('ach-toast-img');
  const toastLabel = document.getElementById('ach-toast-label');
  const toastTitle = document.getElementById('ach-toast-title');
  const toastDesc = document.getElementById('ach-toast-desc');
  let hideTimer;
  let removeTimer;

  document.querySelectorAll('.ach-badge').forEach((badge) => {
    badge.addEventListener('click', () => {
      const locked = badge.dataset.locked === 'true';

      toastImg.src = badge.querySelector('img').src;
      toastLabel.textContent = locked ? 'Locked achievement' : 'Achievement unlocked';
      toastTitle.textContent = badge.dataset.title;
      toastDesc.textContent = badge.dataset.desc;
      toast.classList.toggle('is-locked', locked);

      toast.hidden = false;
      requestAnimationFrame(() => toast.classList.add('is-visible'));

      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
      hideTimer = setTimeout(() => {
        toast.classList.remove('is-visible');
        removeTimer = setTimeout(() => { toast.hidden = true; }, 250);
      }, 4000);
    });
  });
})();
