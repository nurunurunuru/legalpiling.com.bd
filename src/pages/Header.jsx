import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: you can replace with your own icons
import Logo from '../assets/legal.png';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const navItem = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/about' },
    {
      link: 'Services',
      dropdown: true,
      subItems: [
        { link: 'Equipment List', path: '/services/documentation' },
        { link: 'PhotoGallery', path: '/services/photoGallery' },
        { link: 'Video Gallery', path: '/services/legal-advice' },
        { link: 'Upload', path: '/services/upload' },
        { link: 'UpcommingProject', path: '/services/upcommingProject' },
        { link: 'Circular', path: '/services/circular' },
        { link: 'CV', path: '/services/cv' },
        { link: 'CVList', path: '/services/cvList' },
      ],
    },
    { link: 'Contact', path: '/contact' },
  ];

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="LegalPiling Logo" className="h-10 w-auto object-contain" />
            <span className="text-2xl font-bold text-gray-800 tracking-tight">LPC</span>
          </Link>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 items-center">
            {navItem.map((item, index) =>
              item.dropdown ? (
                <div
                  key={item.link}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-gray-700 text-sm font-semibold uppercase tracking-wide hover:text-yellow-600 transition px-4 py-2 rounded-md hover:bg-yellow-100">
                    {item.link}
                  </button>
                  {openDropdown === index && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                        >
                          {sub.link}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 text-sm font-semibold uppercase tracking-wide hover:text-yellow-600 transition px-4 py-2 rounded-md hover:bg-yellow-100"
                >
                  {item.link}
                </Link>
              )
            )}

            {userEmail === 'nursajid@gmail.com' ? (
              <button
                onClick={handleLogout}
                className="text-red-600 text-sm font-semibold uppercase tracking-wide transition px-4 py-2 rounded-md hover:bg-red-100"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-blue-600 text-sm font-semibold uppercase tracking-wide transition px-4 py-2 rounded-md hover:bg-blue-100"
              >
                Login
              </Link>
            )}
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden space-y-2 mt-2 pb-4 border-t pt-4">
            {navItem.map((item) =>
              item.dropdown ? (
                <details key={item.link} className="px-4">
                  <summary className="cursor-pointer text-sm font-semibold text-gray-800 uppercase">
                    {item.link}
                  </summary>
                  <div className="ml-4 mt-2 space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block text-gray-600 text-sm hover:text-yellow-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.link}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 text-sm font-semibold text-gray-800 uppercase hover:text-yellow-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.link}
                </Link>
              )
            )}

            {userEmail === 'nursajid@gmail.com' ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
