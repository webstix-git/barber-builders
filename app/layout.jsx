import '../css/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export const metadata = {
  icons: {
    icon: { url: '/images/favicon.svg', type: 'image/svg+xml' },
  },
};

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior lets Next.js turn off the stylesheet's smooth scrolling while it changes pages, so new pages open at the top instantly.
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
