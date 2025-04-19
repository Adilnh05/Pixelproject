import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [location, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  
  useEffect(() => {
    
    const loginStatus = localStorage.getItem('isLoggedIn');
    
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    } else {
      
      const params = new URLSearchParams(window.location.search);
      if (params.get('login') === 'success') {
        setIsLoggedIn(true);

        localStorage.setItem('isLoggedIn', 'true');
      }
    }
  }, [location]);

  const handleLogin = () => {
    navigate('/games?login=success');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="bg-neutral-dark text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Always visible */}
          <Link href="/" className="flex items-center">
            <h1 className="font-pixel text-xl text-primary mr-2">
              PIXEL<span className="text-secondary">PLAY</span>
            </h1>
            <div className="w-6 h-6 bg-accent rounded-sm animate-pixel-bounce ml-2"></div>
          </Link>

          {/* Navigation Links - Only shown when logged in */}
          {isLoggedIn ? (
            <nav className="hidden md:flex space-x-6">
              <Link href="/games" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/games' ? 'text-primary' : ''}`}>
                Games
              </Link>
              <Link href="/community" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/community' ? 'text-primary' : ''}`}>
                Community
              </Link>
              <Link href="/community" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/leaderboard' ? 'text-primary' : ''}`}>
                Leaderboard
              </Link>
              <Link href="/rewards" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/rewards' ? 'text-primary' : ''}`}>
                Rewards
              </Link>
              <Link href="/account" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/account' ? 'text-primary' : ''}`}>
                Profile
              </Link>
            </nav>
          ) : (
            <div className="hidden md:flex"></div>
          )}

          {/* Auth Buttons or User Menu */}
          <div className="flex items-center">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={handleLogin}
                  className="font-ui text-xs bg-primary text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all mr-3"
                >
                  Login
                </button>
                <Link href="/signup">
                  <button className="font-ui text-xs bg-secondary text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (

              <button
                onClick={handleLogout}
                className="font-ui text-xs border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={toggleMobileMenu} className="md:hidden text-2xl">
            <Menu />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {isLoggedIn ? (
              <nav className="flex flex-col space-y-4">
                <Link href="/games" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/games' ? 'text-primary' : ''}`}>
                  Games
                </Link>
                <Link href="/community" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/community' ? 'text-primary' : ''}`}>
                  Community
                </Link>
                <Link href="/community" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/leaderboard' ? 'text-primary' : ''}`}>
                  Leaderboard
                </Link>
                <Link href="/rewards" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/rewards' ? 'text-primary' : ''}`}>
                  Rewards
                </Link>
                <Link href="/account" className={`font-ui text-sm hover:text-primary transition-colors ${location === '/account' ? 'text-primary' : ''}`}>
                  Profile
                </Link>
              </nav>
            ) : (
              <div className="flex flex-col space-y-2 mt-2">
                <button
                  onClick={handleLogin}
                  className="font-ui text-xs bg-primary text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all w-full"
                >
                  Login
                </button>
                <Link href="/signup">
                  <button className="font-ui text-xs bg-secondary text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all w-full">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;