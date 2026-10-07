'use client';

import { useEffect } from 'react';

export default function LightboxKeys() {
  useEffect(() => {
    const onKeyDown = (event) => {
      const open = document.querySelector('.lightbox:target');
      if (!open) return;

      const target = {
        Escape: '.lightbox-close',
        ArrowLeft: '.lightbox-prev',
        ArrowRight: '.lightbox-next',
      }[event.key];
      if (!target) return;

      const link = open.querySelector(target);
      if (!link) return;

      event.preventDefault();
      location.replace(link.getAttribute('href'));
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return null;
}
