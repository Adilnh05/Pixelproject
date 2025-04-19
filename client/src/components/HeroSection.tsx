import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useLocation } from 'wouter';
import { PixelCharacter1, PixelCharacter2, PixelCharacter3 } from '@/assets/pixel-characters';

const HeroSection = () => {
  const [location] = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [textVisible, setTextVisible] = useState({
    levelUp: false,
    your: false,
    gaming: false,
    experience: false
  });

  useEffect(() => {
  
    const queryString = location.split('?')[1];
    if (queryString) {
      const params = new URLSearchParams(queryString);
      if (params.get('login') === 'success') {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); 
      }
    }
    

    setTimeout(() => setTextVisible(prev => ({ ...prev, levelUp: true })), 300);
    setTimeout(() => setTextVisible(prev => ({ ...prev, your: true })), 800);
    setTimeout(() => setTextVisible(prev => ({ ...prev, gaming: true })), 1300);
    setTimeout(() => setTextVisible(prev => ({ ...prev, experience: true })), 1800);
  }, [location]);

  const getAnimationClass = (part) => {
    if (!textVisible[part]) return "opacity-0";
    
    const baseClasses = "transition-all duration-500";
    
    switch(part) {
      case 'levelUp':
        return `${baseClasses} animate-bounce text-primary`;
      case 'your':
        return `${baseClasses} animate-pulse`;
      case 'gaming':
        return `${baseClasses} animate-bounce text-secondary`;
      case 'experience':
        return `${baseClasses} animate-pulse text-accent`;
      default:
        return baseClasses;
    }
  };

  return (
    <section className="relative overflow-hidden py-16 dither-bg bg-neutral-dark">
      <div className="container mx-auto px-4">
        {/* ✅ Alert */}
        {showAlert && (
          <div className="bg-green-500 text-white px-4 py-2 mb-4 text-center rounded shadow-md">
            ✅ Login Successful!
          </div>
        )}
        
        <div className="text-center text-white mb-12">
          <h1 className="font-pixel text-2xl md:text-4xl mb-6 leading-loose">
            <span className={getAnimationClass('levelUp')}>LEVEL UP</span>{' '}
            <span className={getAnimationClass('your')}>YOUR</span>{' '}
            <span className={getAnimationClass('gaming')}>GAMING</span>{' '}
            <span className={getAnimationClass('experience')}>EXPERIENCE</span>
          </h1>
          <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto">
            Fed up of modern gaming, bring back your OG memories. Join our retro gaming community.
            Play classics, track your progress, earn rewards, and connect with fellow gamers 🎮🎮🎮!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/games?login=success">
              <a className="font-ui text-base bg-primary text-white px-8 py-3 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                Start Playing
              </a>
            </Link>
            <Link href="/learnmore">
              <a className="font-ui text-base border-2 border-secondary text-secondary px-8 py-3 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                Learn More
              </a>
            </Link>
          </div>
        </div>
        
        {/* Pixel Art Characters */}
        <div className="flex justify-center -mb-16">
          <div className="h-32 w-32 transform -rotate-6 animate-float">
            <PixelCharacter1 />
          </div>
          <div className="h-40 w-40 transform rotate-3 animate-float animation-delay-200">
            <PixelCharacter2 />
          </div>
          <div className="h-36 w-36 transform -rotate-3 animate-float animation-delay-400">
            <PixelCharacter3 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;