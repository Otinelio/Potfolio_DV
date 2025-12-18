document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('header nav');
  var collapse = document.getElementById('navbarNavAltMarkup');
  if (!nav) return;
  function adjustInfosImage() {
    var section = document.querySelector('section#infos');
    if (!section) return;
    var img = section.querySelector('.infos-image img');
    var textCol = section.querySelector('.avant-titre')?.closest('.col-12');
    if (!img || !textCol) return;
    var isDesktop = window.innerWidth >= 992;
    if (isDesktop) {
      var h = textCol.offsetHeight;
      img.style.maxHeight = h + 'px';
      img.style.objectFit = 'cover';
      img.style.width = '100%';
    } else {
      img.style.maxHeight = '';
      img.style.objectFit = '';
      img.style.width = '';
    }
  }
  var testimonials = [
    {
      text: 'Une collaboration exceptionnelle du début à la fin. DigitalVision a su comprendre nos besoins et livrer une solution sur‑mesure qui a considérablement amélioré notre efficacité opérationnelle.',
      name: 'Marie Lefebvre',
      title: 'Fondatrice, StartupLab'
    },
    {
      text: 'Nous avons été impressionnés par le professionnalisme et la qualité d’exécution. Le design et les performances dépassent nos attentes.',
      name: 'Amadou Diop',
      title: 'Directeur Technique, NovaTech'
    },
    {
      text: 'Équipe à l’écoute, délais respectés et livrables impeccables. Une expérience premium qui fait la différence.',
      name: 'Sofia Moreau',
      title: 'CMO, Creativia'
    }
  ];
  var tIndex = 0;
  var tText = document.getElementById('testimonial-text');
  var tName = document.getElementById('testimonial-author-name');
  var tTitle = document.getElementById('testimonial-author-title');
  var btnPrev = document.getElementById('testimonial-prev');
  var btnNext = document.getElementById('testimonial-next');
  function renderTestimonial(i) {
    var t = testimonials[i];
    if (!t || !tText || !tName || !tTitle) return;
    tText.textContent = '“' + t.text + '”';
    tName.textContent = t.name;
    tTitle.textContent = t.title;
  }
  renderTestimonial(tIndex);
  if (btnPrev) {
    btnPrev.addEventListener('click', function () {
      tIndex = (tIndex - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(tIndex);
    });
  }
  if (btnNext) {
    btnNext.addEventListener('click', function () {
      tIndex = (tIndex + 1) % testimonials.length;
      renderTestimonial(tIndex);
    });
  }
  function onScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('navbar-scrolled');
    } else {
      nav.classList.remove('navbar-scrolled');
    }
  }
  onScroll();
  adjustInfosImage();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', adjustInfosImage);
  window.addEventListener('load', adjustInfosImage);

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

  var filterContainer = document.querySelector('.portfolio-filters');
  if (filterContainer) {
    var chips = Array.prototype.slice.call(filterContainer.querySelectorAll('.filter-chip'));
    var containers = Array.prototype.slice.call(document.querySelectorAll('.portfolio-grid, .portfolio-projects .row'));
    var containerMap = new Map();
    containers.forEach(function (container) {
      var rawItems = Array.prototype.slice.call(container.querySelectorAll('.project-card, .project-tile'));
      var items = rawItems.map(function (card) {
        var wrapper = card.closest('.portfolio-projects .row') ? card.closest('[class*="col-"]') : card;
        if (!wrapper) wrapper = card;
        var m = (card.className.match(/type-([a-z]+)/i) || []);
        var type = m[1] ? m[1].toLowerCase() : '';
        wrapper.dataset.filterType = type;
        return wrapper;
      });
      var unique = [];
      items.forEach(function (el) {
        if (unique.indexOf(el) === -1) unique.push(el);
      });
      containerMap.set(container, { items: unique, original: unique.slice() });
    });
    function resetPositions() {
      containerMap.forEach(function (state, container) {
        state.original.forEach(function (item) {
          container.appendChild(item);
        });
      });
    }
    function hideItem(el) {
      el.classList.add('filter-anim');
      el.style.opacity = '0';
      el.style.transform = 'scale(0.98)';
      setTimeout(function () {
        el.classList.add('is-hidden');
        el.classList.remove('filter-anim');
        el.style.opacity = '';
        el.style.transform = '';
      }, 200);
    }
    function showItem(el) {
      if (el.classList.contains('is-hidden')) {
        el.classList.remove('is-hidden');
        el.classList.add('filter-anim');
        el.style.opacity = '0';
        el.style.transform = 'scale(0.98)';
        requestAnimationFrame(function () {
          el.style.opacity = '1';
          el.style.transform = '';
          setTimeout(function () {
            el.classList.remove('filter-anim');
            el.style.opacity = '';
            el.style.transform = '';
          }, 250);
        });
      }
    }
    function applyFilter(type) {
      resetPositions();
      containerMap.forEach(function (state, container) {
        var matches = [];
        var nonMatches = [];
        state.items.forEach(function (item) {
          var t = item.dataset.filterType || '';
          var match = type === 'all' || t === type;
          if (match) matches.push(item);
          else nonMatches.push(item);
        });
        var frag = document.createDocumentFragment();
        matches.forEach(function (item) {
          showItem(item);
          frag.appendChild(item);
        });
        var first = container.firstElementChild;
        if (first) container.insertBefore(frag, first);
        else container.appendChild(frag);
        nonMatches.forEach(function (item) {
          hideItem(item);
        });
      });
    }
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var type = chip.getAttribute('data-filter') || 'all';
        applyFilter(type);
      });
    });
    applyFilter('all');
  }
});
