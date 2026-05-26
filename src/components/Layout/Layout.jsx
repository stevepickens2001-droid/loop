import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Layout = ({ children }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Cars', path: '/cars' },
    { name: 'My Bookings', path: '/manage' },
  ];

  return (
    <div className="layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ 
        background: 'var(--color-primary-navy)', 
        color: 'white', 
        padding: '1rem 0',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Loop" style={{ height: '50px' }} />
          </Link>
          <nav>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    style={{ 
                      color: 'white', 
                      fontWeight: '600',
                      textDecoration: 'none',
                      position: 'relative',
                      paddingBottom: '4px',
                      borderBottom: location.pathname === link.path ? '2px solid var(--color-teal)' : 'none'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      <main style={{ flex: 1, background: 'var(--color-off-white)' }}>
        {children}
      </main>

      <footer style={{ 
        background: 'var(--color-primary-navy)', 
        color: 'white', 
        padding: '3rem 0',
        marginTop: 'auto'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1 1 300px' }}>
              <img src={logo} alt="Loop" style={{ height: '40px', marginBottom: '1rem', filter: 'brightness(0) invert(1)' }} />
              <p style={{ color: 'var(--color-slate-gray)', maxWidth: '300px' }}>
                The modern way to rent. Drive now, pay when you're finished. Freedom without friction.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {navLinks.map(link => (
                  <li key={link.path} style={{ marginBottom: '0.5rem' }}>
                    <Link to={link.path} style={{ color: 'var(--color-slate-gray)' }}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact</h4>
              <p style={{ color: 'var(--color-slate-gray)', margin: 0 }}>Email: hello@looprental.com</p>
              <p style={{ color: 'var(--color-slate-gray)', margin: 0 }}>Phone: (555) 123-4567</p>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            marginTop: '2rem', 
            paddingTop: '2rem',
            textAlign: 'center',
            color: 'var(--color-slate-gray)',
            fontSize: '14px'
          }}>
            <p>&copy; {new Date().getFullYear()} Loop Car Rental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
