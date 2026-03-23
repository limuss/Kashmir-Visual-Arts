
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArtFormDetailPage from './pages/ArtFormDetailPage';
import ArtisanDetailPage from './pages/ArtisanDetailPage';
import ExplorePage from './pages/ExplorePage';
import ArtFormsPage from './pages/ArtFormsPage';
import ArtistsPage from './pages/ArtistsPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { ART_FORMS, ARTISANS as INITIAL_ARTISANS } from './constants';
import { Artisan, User } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [user, setUser] = useState<User | null>(null);
  const [allArtisans, setAllArtisans] = useState<Artisan[]>(INITIAL_ARTISANS.map(a => ({...a, status: 'live'})));
  
  const [selectedArtFormId, setSelectedArtFormId] = useState<string | null>(null);
  const [selectedArtisanId, setSelectedArtisanId] = useState<string | null>(null);
  const [artisanFilterIntent, setArtisanFilterIntent] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedArtFormId, selectedArtisanId]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedArtFormId(null);
    setSelectedArtisanId(null);
    if (page !== 'artists') {
      setArtisanFilterIntent(null);
    }
  };

  const handleArtFormSelect = (id: string) => {
    setSelectedArtFormId(id);
    setSelectedArtisanId(null);
    setCurrentPage('detail');
  };

  const handleArtisanSelect = (id: string) => {
    setSelectedArtisanId(id);
    setSelectedArtFormId(null);
    setCurrentPage('artisan-detail');
  };

  const handleExploreArtisans = (craftName: string) => {
    setArtisanFilterIntent(craftName);
    setCurrentPage('artists');
  };

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handleUpdateArtisans = (updatedList: Artisan[]) => {
    setAllArtisans(updatedList);
  };

  const currentArtForm = ART_FORMS.find(f => f.id === selectedArtFormId);
  const currentArtisan = allArtisans.find(a => a.id === selectedArtisanId);

  return (
    <div className="min-h-screen flex flex-col bg-[#cab89d] selection:bg-[#7B4A2E] selection:text-white">
      <Navbar 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        user={user}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            onArtFormSelect={handleArtFormSelect} 
            onArtisanSelect={handleArtisanSelect}
            artisans={allArtisans.filter(a => a.status === 'live')}
          />
        )}
        
        {currentPage === 'explore' && (
          <ExplorePage 
            onArtFormSelect={handleArtFormSelect} 
            onArtisanSelect={handleArtisanSelect}
            artisans={allArtisans.filter(a => a.status === 'live')}
          />
        )}

        {currentPage === 'art-forms' && (
          <ArtFormsPage 
            onArtFormSelect={handleArtFormSelect}
          />
        )}

        {currentPage === 'artists' && (
          <ArtistsPage 
            onArtisanSelect={handleArtisanSelect}
            preAppliedCraft={artisanFilterIntent}
            artisans={allArtisans.filter(a => a.status === 'live')}
          />
        )}
        
        {currentPage === 'detail' && currentArtForm && (
          <ArtFormDetailPage 
            artForm={currentArtForm} 
            onBack={() => handleNavigate('art-forms')} 
            onExploreArtisans={handleExploreArtisans}
            onArtisanSelect={handleArtisanSelect}
            artisans={allArtisans.filter(a => a.status === 'live')}
          />
        )}

        {currentPage === 'artisan-detail' && currentArtisan && (
          <ArtisanDetailPage 
            artisan={currentArtisan} 
            onBack={() => handleNavigate('artists')} 
          />
        )}

        {currentPage === 'login' && (
          <LoginPage onLogin={handleLogin} />
        )}

        {currentPage === 'dashboard' && user && (
          <DashboardPage 
            user={user} 
            artisans={allArtisans} 
            onUpdateArtisans={handleUpdateArtisans}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
