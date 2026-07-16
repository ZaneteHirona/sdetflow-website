(() => {
  'use strict';

  const initHeader = () => {
    const header = document.querySelector('[data-header]');

    if (!header) return;

    const updateHeader = () => {
      header.classList.toggle('scrolled', window.scrollY > 16);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  };

  const initMobileMenu = () => {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const nav = document.querySelector('[data-nav]');

    if (!menuToggle || !nav) return;

    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  };

  const initRevealOnScroll = () => {
    const revealItems = document.querySelectorAll('.reveal');

    if (!revealItems.length) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));
  };

  const initWorkflowTabs = () => {
    const tabs = [...document.querySelectorAll('[role="tab"]')];
    const panels = [...document.querySelectorAll('[role="tabpanel"]')];

    if (!tabs.length || !panels.length) return;

    const activateTab = (tab) => {
      const target = tab.dataset.tab;
      tabs.forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.panel !== target;
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activateTab(tab));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();

        let nextIndex = index;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;

        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
      });
    });
  };

  const initCounters = () => {
    const counters = document.querySelectorAll('[data-counter]');

    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.counter);
        const duration = 1100;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = Math.round(target * eased);

          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.unobserve(element);
      });
    }, { threshold: 0.7 });

    counters.forEach((counter) => counterObserver.observe(counter));
  };

  initHeader();
  initMobileMenu();
  initRevealOnScroll();
  initWorkflowTabs();
  initCounters();
})();
