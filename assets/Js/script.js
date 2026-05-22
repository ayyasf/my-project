/document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelector('.bars');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('closeBtn');
  const menuLinks = mobileMenu.querySelectorAll('a');
  bars.addEventListener('click', () => mobileMenu.classList.add('open'));
  closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  menuLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('open')));
});