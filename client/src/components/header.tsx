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
    <header className="shadow-sm border-b border-custom-border bg-[#3E4B7E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40" 
              alt="Fox mascot logo" 
              className="w-10 h-10 rounded-full mr-3"
            />
            <h1 className="text-xl font-bold text-[#FAFAFA]">Caminho da Raposa</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigate("/")}
              className="hover:text-custom-link transition-colors text-[#FAFAFA]"
            >
              Início
            </button>
            <button 
              onClick={() => navigate("/trails")}
              className="hover:text-custom-link transition-colors text-[#FAFAFA]"
            >
              Trilhas
            </button>
            <button 
              onClick={() => navigate("/progress")}
              className="text-[#FAFAFA] hover:text-custom-link transition-colors"
            >
              Progresso
            </button>
            <button 
              onClick={() => navigate("/blog")}
              className="text-[#FAFAFA] hover:text-custom-link transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => navigate("/about")}
              className="text-[#FAFAFA] hover:text-custom-link transition-colors"
            >
              Sobre
            </button>
          </nav>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-[#FAFAFA]"
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
                className="text-[#FAFAFA] hover:text-custom-link transition-colors py-2 text-left"
              >
                Início
              </button>
              <button 
                onClick={() => navigate("/trails")}
                className="text-[#FAFAFA] hover:text-custom-link transition-colors py-2 text-left"
              >
                Trilhas
              </button>
              <button 
                onClick={() => navigate("/progress")}
                className="text-[#FAFAFA] hover:text-custom-link transition-colors py-2 text-left"
              >
                Progresso
              </button>
              <button 
                onClick={() => navigate("/blog")}
                className="text-[#FAFAFA] hover:text-custom-link transition-colors py-2 text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="text-[#FAFAFA] hover:text-custom-link transition-colors py-2 text-left"
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
