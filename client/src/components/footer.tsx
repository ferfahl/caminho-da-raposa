export function Footer() {
  return (
    <footer className="bg-custom-highlight text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&h=32" 
                alt="Fox mascot logo" 
                className="w-8 h-8 rounded-full mr-2"
              />
              <h3 className="text-lg font-bold">Caminho da Raposa</h3>
            </div>
            <p className="text-gray-300 text-sm">Educação em segurança digital de forma interativa e divertida.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Trilhas</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Autodefesa Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Golpes e Armadilhas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Em breve...</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Caminho da Raposa. Projeto educacional open-source.</p>
        </div>
      </div>
    </footer>
  );
}
