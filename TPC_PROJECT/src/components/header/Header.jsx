import './Header.css';
import logo from '../../assets/logos/tpcLogo.svg';
import hamburger from '../../assets/icons/burger.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <img src={logo} alt="Logo"  height={53} width={134}/>
        </a>
        <nav className="nav">

          <div className="hamburger-menu">
              <img src={hamburger} alt="" width={42} height={35}/>
          </div>

            <ul className="nav-links">
              <li className='bnt'><Link to="/">Home</Link></li>
              <li className='bnt'><Link to="/Filter">PageFilter</Link></li>
              <li className='bnt'><Link to="/services">Services</Link></li>
              <li className='bnt'><Link to="/contact">Contact</Link></li></ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
