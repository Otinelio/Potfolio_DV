document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('header nav');
  var collapse = document.getElementById('navbarNavAltMarkup');
  if (!nav) return;
  function onScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('navbar-scrolled');
    } else {
      nav.classList.remove('navbar-scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (collapse) {
    collapse.addEventListener('show.bs.collapse', function () {
      nav.classList.add('navbar-scrolled');
    });
    collapse.addEventListener('hidden.bs.collapse', function () {
      if (window.scrollY <= 10) {
        nav.classList.remove('navbar-scrolled');
      }
    });
  }
});
