import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrendingGames from '@/components/TrendingGames';
import FeaturesSection from '@/components/FeaturesSection';
import UserDashboard from '@/components/UserDashboard';
import RewardsSection from '@/components/RewardsSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TrendingGames />
        <FeaturesSection />
        <UserDashboard />
        <RewardsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
