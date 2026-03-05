import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Footer from './Footer';

const PAGES_WITH_FOOTER = ['/listings', '/classifieds', '/blog', '/about', '/contact', '/profile'];

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const showFooter = PAGES_WITH_FOOTER.includes(location.pathname);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <>
      <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
}
