import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🦊</span>
            </div>
            <h1 className="text-2xl font-bold text-[#5C2A7C]">Caminho da Raposa</h1>
          </div>
          <p className="text-[#2D2D2D]">Entre na sua conta para continuar aprendendo</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#D9D3E5]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-[#D9D3E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C75EEB] focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-[#D9D3E5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C75EEB] focus:border-transparent"
                  placeholder="Sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-[#C75EEB] focus:ring-[#C75EEB] border-[#D9D3E5] rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-[#2D2D2D]">
                  Lembrar de mim
                </label>
              </div>
              <a href="#" className="text-sm text-[#6C63FF] hover:underline">
                Esqueceu a senha?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 bg-[#C75EEB] text-white font-semibold rounded-lg hover:bg-[#B347DC] transition-colors"
            >
              <LogIn className="mr-2" size={20} />
              Entrar
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#D9D3E5]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[#2D2D2D]">Ou</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#2D2D2D]">
              Não tem uma conta?{' '}
              <a href="#" className="text-[#6C63FF] hover:underline font-medium">
                Cadastre-se gratuitamente
              </a>
            </p>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-6 bg-[#F4F0FA] rounded-lg p-4 border border-[#D9D3E5]">
          <p className="text-sm text-[#5C2A7C] text-center">
            <strong>Demo:</strong> Esta é uma versão de demonstração. 
            O login ainda não está funcional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;