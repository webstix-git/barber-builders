'use client';

import { useEffect } from 'react';

export default function TabsBehavior() {
  useEffect(() => {
    const cleanups = [];

    document.querySelectorAll('[role="tablist"]').forEach((list) => {
      const tabs = [...list.querySelectorAll('[role="tab"]')];

      const select = (tab) => {
        tabs.forEach((other) => {
          const selected = other === tab;
          other.setAttribute('aria-selected', String(selected));
          other.tabIndex = selected ? 0 : -1;
          document.getElementById(other.getAttribute('aria-controls')).hidden = !selected;
        });
      };

      tabs.forEach((tab, i) => {
        const onClick = () => select(tab);

        // Arrow keys move between tabs, as in the ARIA tabs pattern.
        const onKeyDown = (event) => {
          const keys = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
          if (!(event.key in keys)) return;
          event.preventDefault();
          const next = tabs[(keys[event.key] + tabs.length) % tabs.length];
          select(next);
          next.focus();
        };

        tab.addEventListener('click', onClick);
        tab.addEventListener('keydown', onKeyDown);
        cleanups.push(() => {
          tab.removeEventListener('click', onClick);
          tab.removeEventListener('keydown', onKeyDown);
        });
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
