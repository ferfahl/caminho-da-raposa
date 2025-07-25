import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Github, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3E4B7E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🦊</span>
              </div>
              <h3 className="text-lg font-bold">Caminho da Raposa</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Sua jornada pela segurança digital começa aqui. Aprenda a se proteger no mundo virtual 
              com conteúdo acessível e prático.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/trilhas" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Trilhas
                </Link>
              </li>
              <li>
                <Link to="/perfil" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Meu Perfil
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Legais */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Caminho da Raposa. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Shield size={16} className="text-gray-300" />
            <span className="text-gray-300 text-sm">Segurança em primeiro lugar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;