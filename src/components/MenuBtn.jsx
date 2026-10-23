import React, { useEffect, useState } from 'react';
import './navbar.css';

const MenuBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('toggle-mobile-menu'));
  };

  if (!visible) return null;

  return (
    <div
      className="floating-menu-btn"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Toggle navigation menu"
    >
      <div className="btn-hamburger-lines">
        <span className="h-line line1"></span>
        <span className="h-line line2"></span>
      </div>
    </div>
  );
};

export default MenuBtn;
