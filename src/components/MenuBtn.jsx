import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MenuBtn = () => {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [anim, setAnim] = useState('ease-in-right');

  useEffect(() => {
    if (window.scrollY > 50) {
      console.log(window.scrollY);
      setMenu2(true);
      setCloseMenu(true);
    } else if (window.scrollY < 50) {
      setMenu2(false);
      setCloseMenu(false);
    }
  }, [window.scrollY]);
  return (
    <div>
      {menu ? (
        <>
          <div className="menu" style={{ animation: `${anim} 0.6s linear` }}>
            {!closeMenu ? (
              <div
                className="menu-close"
                onClick={() => {
                  setAnim('ease-out-right');
                  setTimeout(() => {
                    setMenu((prev) => !prev);
                    setAnim('ease-in-right');
                  }, 500);
                }}
              >
                ※
              </div>
            ) : (
              ''
            )}
            <div className="navigation-text">Navigation</div>
            <div className="nav-item-menu">
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/work"
              >
                Work
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/about"
              >
                About
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="socials">
              <p>SOCIALS</p>
              <ul>
                <a href="https://github.com/Vivek-27" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vivek-fullstack/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/vivekumar27_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </ul>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      {menu2 ? (
        <>
          <div
            className="menu2"
            onClick={() => {
              setAnim('ease-out-right');
              setTimeout(() => {
                setMenu((prev) => !prev);
                setAnim('ease-in-right');
              }, 500);
            }}
          >
            <div className={menu ? `line line1` : `line`}></div>
            <div className={menu ? `line line2` : `line`}></div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default MenuBtn;
