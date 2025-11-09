import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-2xl py-2'
          : 'bg-gradient-to-r from-green-800 to-green-600 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
  to="/"
  className="flex items-center hover:scale-105 transition-transform"
>
  <div
    className={`rounded-lg transition-all ${
      isScrolled
        ? 'bg-green-100 p-1'
        : 'bg-white/20 backdrop-blur-sm p-1'
    }`}
  >
    <img 
      src="/img/Logo.jpg" 
      alt="Vargas Tree Landscape Service" 
      className="h-16 w-auto object-contain" // Más grande - ajusta según necesites
    />
  </div>
</Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all relative group ${
                  isActive(item.path)
                    ? isScrolled
                      ? 'text-green-700 bg-green-100'
                      : 'text-white bg-white/20'
                    : isScrolled
                      ? 'text-gray-700 hover:text-green-700'
                      : 'text-white hover:text-white'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-2xl p-4 animate-slideDown">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  isActive(item.path)
                    ? 'text-white bg-green-600'
                    : 'text-gray-700 hover:bg-green-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}