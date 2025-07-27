import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export function Header() {
  const [, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = (path: string) => {
    setLocation(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="shadow-sm border-b border-custom-border bg-custom-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img 
              src="https://github.com/ferfahl/caminho-da-raposa/blob/main/public/static/img/mascote-icone.png?raw=true&auto=format&fit=crop&w=40&h=40" 
              alt="Fox mascot logo" 
              className="w-10 h-10 rounded-full mr-3"
            />
            <h1 className="text-xl font-bold text-custom-whitetext">Caminho da Raposa</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigate("/")}
              className="hover:text-custom-link transition-colors text-custom-whitetext"
            >
              Início
            </button>
            <button 
              onClick={() => navigate("/trails")}
              className="hover:text-custom-link transition-colors text-custom-whitetext"
            >
              Trilhas
            </button>
            <button 
              onClick={() => navigate("/progress")}
              className="text-custom-whitetext hover:text-custom-link transition-colors"
            >
              Progresso
            </button>
            <button 
              onClick={() => navigate("/blog")}
              className="text-custom-whitetext hover:text-custom-link transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => navigate("/about")}
              className="text-custom-whitetext hover:text-custom-link transition-colors"
            >
              Sobre
            </button>
          </nav>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-custom-whitetext"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-custom-border py-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => navigate("/")}
                className="text-custom-whitetext hover:text-custom-link transition-colors py-2 text-left"
              >
                Início
              </button>
              <button 
                onClick={() => navigate("/trails")}
                className="text-custom-whitetext hover:text-custom-link transition-colors py-2 text-left"
              >
                Trilhas
              </button>
              <button 
                onClick={() => navigate("/progress")}
                className="text-custom-whitetext hover:text-custom-link transition-colors py-2 text-left"
              >
                Progresso
              </button>
              <button 
                onClick={() => navigate("/blog")}
                className="text-custom-whitetext hover:text-custom-link transition-colors py-2 text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="text-custom-whitetext hover:text-custom-link transition-colors py-2 text-left"
              >
                Sobre
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
