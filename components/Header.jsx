'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Header() {
  const pathname = usePathname();
  const menuToggle = useRef(null);

  // The header stays mounted between pages, so close the mobile menu after each navigation as a full page load would.
  useEffect(() => {
    if (menuToggle.current) menuToggle.current.checked = false;
  }, [pathname]);

  const page = pathname === '/thank-you' ? '/contact' : pathname;
  const current = (href) => (page === href ? 'page' : undefined);

  return (
    <header className="site-header">
      <div className="container">
        <Link className="logo" href="/" aria-label="Barber Builders home">{" "}
          <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="12" fill="#111111" /><path d="M12 34 32 16l20 18" fill="none" stroke="#baab5d" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 31v17h26V31" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round" /><path d="M28 48V38h8v10" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round" /></svg>{" "}
          <span className="logo-text"><span className="logo-name">Barber Builders</span><span className="logo-tag">Custom Homes</span></span>{" "}
        </Link>{" "}
        <input className="nav-toggle-input" type="checkbox" id="nav-toggle" ref={menuToggle} />{" "}
        <label className="nav-toggle" htmlFor="nav-toggle"><span className="nav-toggle-bars"></span><span className="visually-hidden">Menu</span></label>
        <nav className="main-nav" aria-label="Main">
          <ul className="nav-list">
            <li><Link href="/" aria-current={current('/')}>Home</Link></li>
            <li><Link href="/about" aria-current={current('/about')}>About Us</Link></li>
            <li className="has-dropdown">
              <Link href="/services" aria-current={current('/services')}>Services<svg className="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></Link>
              <ul className="nav-dropdown">
                <li><Link href="/services#custom-homes">Custom Homes</Link></li>
                <li><Link href="/services#additions">Additions</Link></li>
                <li><Link href="/services#remodels">Remodels</Link></li>
                <li><Link href="/services#kitchens">Kitchens &amp; Baths</Link></li>
              </ul>
            </li>
            <li><Link href="/work" aria-current={current('/work')}>See Our Work</Link></li>
            <li><Link href="/contact" aria-current={current('/contact')}>Contact Us</Link></li>
          </ul>
          <Link className="btn btn--primary" href="/contact">Start Your Project</Link>
        </nav>
      </div>
    </header>
  );
}
