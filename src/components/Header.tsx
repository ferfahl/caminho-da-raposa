import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-[#D9D3E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦊</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#5C2A7C]">Caminho da Raposa</h1>
              <p className="text-xs text-[#2D2D2D] opacity-75">Segurança Digital</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-[#6C63FF] border-b-2 border-[#6C63FF] pb-1' 
                  : 'text-[#2D2D2D] hover:text-[#6C63FF]'
              }`}
            >
              Início
            </Link>
            <Link
              to="/trilhas"
              className={`text-sm font-medium transition-colors ${
                isActive('/trilhas') 
                  ? 'text-[#6C63FF] border-b-2 border-[#6C63FF] pb-1' 
                  : 'text-[#2D2D2D] hover:text-[#6C63FF]'
              }`}
            >
              Trilhas
            </Link>
            <Link
              to="/perfil"
              className="flex items-center space-x-2 bg-[#C75EEB] text-white px-4 py-2 rounded-lg hover:bg-[#B347DC] transition-colors"
            >
              <User size={16} />
              <span className="text-sm font-medium">Perfil</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#2D2D2D] hover:bg-[#F4F0FA]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#D9D3E5]">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-[#2D2D2D] hover:text-[#6C63FF] px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/trilhas"
                className="text-[#2D2D2D] hover:text-[#6C63FF] px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Trilhas
              </Link>
              <Link
                to="/perfil"
                className="flex items-center space-x-2 text-[#2D2D2D] hover:text-[#6C63FF] px-3 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} />
                <span>Perfil</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;