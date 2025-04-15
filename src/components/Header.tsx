
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === "/");
  
  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);
  const textColor = isHomePage ? "text-white" : "text-black";
  const hoverColor = isHomePage ? "hover:text-gray-300" : "hover:text-gray-600";
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${isHomePage ? 'bg-transparent' : 'bg-white border-b border-gray-200'}`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`${textColor} text-2xl font-bold tracking-wider`}>
          VASEU
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/shop" className={`${textColor} ${hoverColor} transition-colors text-sm uppercase tracking-wider`}>
            Shop
          </Link>
          <Link to="/collection" className={`${textColor} ${hoverColor} transition-colors text-sm uppercase tracking-wider`}>
            Collection
          </Link>
          <Link to="/about" className={`${textColor} ${hoverColor} transition-colors text-sm uppercase tracking-wider`}>
            About
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button aria-label="Search" className={`${textColor} ${hoverColor} transition-colors`}>
            <Search size={20} />
          </button>
          <Link to="/login" aria-label="Login" className={`${textColor} ${hoverColor} transition-colors`}>
            <User size={20} />
          </Link>
          <Link to="/cart" aria-label="Shopping Cart" className={`${textColor} ${hoverColor} transition-colors`}>
            <ShoppingCart size={20} />
          </Link>
          <button 
            aria-label="Mobile Menu" 
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 absolute w-full">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/shop" 
                className="text-white hover:text-gray-300 py-2 text-sm uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/collection" 
                className="text-white hover:text-gray-300 py-2 text-sm uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Collection
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-gray-300 py-2 text-sm uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
