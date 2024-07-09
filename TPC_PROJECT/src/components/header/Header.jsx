import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../../assets/logos/tpcLogo.svg';
import hamburger from '../../assets/icons/burger.svg';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

function Header() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setShow(false);
    } else if (currentScrollY < lastScrollY.current) {
      setShow(true);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${show ? '' : 'hide'}`}>
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo" height={65} width={150}/>
        </a>
        <nav className="nav">
          <div className="hamburger-menu">
            <img src={hamburger} alt="Menu" width={42} height={35} />
          </div>
          <ul className="nav-links">
            <li className='bnt'><Link to="/" style={{ color: isActive('/') ? 'rgba(255, 51, 204, 1)' : 'white' }}>Home</Link></li>
            <li className='bnt'><Link to="/Filter" style={{ color: isActive('/Filter') ? 'rgba(255, 51, 204, 1)' : 'white' }}>PageFilter</Link></li>
            <li className='bnt'><Link to="/services" style={{ color: isActive('/services') ? 'rgba(255, 51, 204, 1)' : 'white' }}>Services</Link></li>
            <li className='bnt'><Link to="/contact" style={{ color: isActive('/contact') ? 'rgba(255, 51, 204, 1)' : 'white' }}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
