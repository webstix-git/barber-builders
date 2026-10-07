'use client';

import { useEffect } from 'react';

export default function SectionNav() {
  useEffect(() => {
    const nav = document.querySelector('.section-nav');
    if (!nav) return undefined;

    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const sections = links.map((link) => document.querySelector(link.hash));
    let current = links.find((link) => link.hasAttribute('aria-current'));

    const setCurrent = (link) => {
      if (link === current) return;
      current?.removeAttribute('aria-current');
      link.setAttribute('aria-current', 'true');
      current = link;

      // On phones the bar scrolls sideways, so keep the highlighted tab in view.
      if (nav.scrollWidth > nav.clientWidth) {
        nav.scrollTo({ left: link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2, behavior: 'smooth' });
      }
    };

    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let index = atBottom ? sections.length - 1 : 0;

      if (!atBottom) {
        sections.forEach((section, i) => {
          const line = parseFloat(getComputedStyle(section).scrollMarginTop) + 2;
          if (section.getBoundingClientRect().top <= line) index = i;
        });
      }

      setCurrent(links[index]);
    };

    // While a clicked tab scrolls the page, hold its highlight until the scrolling stops.
    let clicked = null;
    let releaseTimer;
    const release = () => {
      clicked = null;
      update();
    };

    const onScroll = () => {
      if (clicked) {
        clearTimeout(releaseTimer);
        releaseTimer = setTimeout(release, 150);
        return;
      }
      update();
    };

    const linkHandlers = links.map((link) => {
      const onClick = () => {
        clicked = link;
        setCurrent(link);
        clearTimeout(releaseTimer);
        releaseTimer = setTimeout(release, 1000);
      };
      link.addEventListener('click', onClick);
      return () => link.removeEventListener('click', onClick);
    });

    // Service links in the open mobile menu would otherwise scroll the page hidden behind it.
    const menuToggle = document.getElementById('nav-toggle');
    const closeMenu = () => {
      menuToggle.checked = false;
    };
    const menuLinks = document.querySelectorAll('.main-nav a[href*="#"]');
    menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

    // The bar wraps onto two rows at some widths, so sections land below its real height.
    const setNavHeight = () => nav.parentElement.style.setProperty('--nav-h', `${nav.offsetHeight}px`);
    setNavHeight();

    const onResize = () => {
      setNavHeight();
      onScroll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Links from other pages (such as /services#baths) jump straight there instead of animating down from the top.
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant' });
    update();

    return () => {
      clearTimeout(releaseTimer);
      linkHandlers.forEach((remove) => remove());
      menuLinks.forEach((link) => link.removeEventListener('click', closeMenu));
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}
