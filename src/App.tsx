import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trilhas from './pages/Trilhas';
import Modulo from './pages/Modulo';
import Quiz from './pages/Quiz';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F4F0FA] flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trilhas" element={<Trilhas />} />
            <Route path="/modulo/:trilhaId/:moduloId" element={<Modulo />} />
            <Route path="/quiz/:trilhaId" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;