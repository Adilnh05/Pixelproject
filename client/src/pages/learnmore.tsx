import { useEffect } from 'react';
import { Link } from 'wouter';
import { Home } from 'lucide-react';

const learnMore = () => {
  useEffect(() => {
    
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus !== 'true') {

      console.log('User not logged in');
    }
  }, []);

  return (
    <div className="bg-neutral-dark text-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-neutral-darker py-6 mb-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-pixel text-3xl text-primary">
              USER <span className="text-secondary">PROFILE</span>
            </h1>
            <Link href="/">
              <button className="flex items-center font-ui bg-primary text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                <Home size={16} className="mr-2" />
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section className="relative overflow-hidden py-16 dither-bg border-b-2 border-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-pixel text-3xl md:text-5xl mb-6">
            <span className="text-primary">ABOUT</span> 
            <span className="text-secondary"> PIXEL</span>
            <span className="text-accent">PLAY</span>
          </h1>
          <p className="font-body text-xl max-w-3xl mx-auto mb-8">
            Rediscover the magic of retro gaming in a modern community experience
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-pixel text-2xl mb-6 text-secondary">OUR MISSION</h2>
              <p className="font-body text-lg mb-4">
                At PixelPlay, we're on a mission to preserve and celebrate the golden era of gaming. 
                We believe that retro games aren't just nostalgic relics—they're timeless works of art 
                that deserve to be experienced by generations to come.
              </p>
              <p className="font-body text-lg">
                We've created a community where classic gaming enthusiasts can connect, compete, 
                and share their passion for pixel-perfect adventures in a modern social environment.
              </p>
            </div>
            <div className="bg-neutral-light p-6 rounded shadow-pixel border-2 border-accent">
              <h3 className="font-pixel text-xl mb-4 text-primary">WHY RETRO GAMING?</h3>
              <ul className="font-body space-y-3">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-primary mt-1 mr-3"></div>
                  <span>Simple yet challenging gameplay that rewards skill</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-secondary mt-1 mr-3"></div>
                  <span>Iconic pixel art that sparked generations of creativity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-accent mt-1 mr-3"></div>
                  <span>Memorable chiptune soundtracks that defined an era</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-primary mt-1 mr-3"></div>
                  <span>Innovation that did more with less</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-light text-neutral-dark">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-2xl mb-12 text-center text-primary">WHAT WE OFFER</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-neutral-dark text-white p-6 rounded shadow-pixel border-2 border-primary">
              
              <h3 className="font-pixel text-xl mb-3 text-primary">CLASSIC GAMES</h3>
              <p className="font-body">
                Play a curated collection of retro games directly in your browser. 
                From arcade classics to 8-bit adventures, we've preserved these gems 
                for your enjoyment.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-neutral-dark text-white p-6 rounded shadow-pixel border-2 border-secondary">
              
              <h3 className="font-pixel text-xl mb-3 text-secondary">COMMUNITY</h3>
              <p className="font-body">
                Connect with fellow retro gaming enthusiasts. Share strategies, memories, 
                and your love for classic games in our vibrant community forums.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-neutral-dark text-white p-6 rounded shadow-pixel border-2 border-accent">
              
              <h3 className="font-pixel text-xl mb-3 text-accent">REWARDS</h3>
              <p className="font-body">
                Earn points and achievements as you play. Climb the leaderboards, unlock 
                special content, and show off your retro gaming prowess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-2xl mb-12 text-center text-secondary">HOW IT WORKS</h2>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {/* Step 1 */}
            <div className="relative">
              <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center">
                <span className="font-pixel text-xl">1</span>
              </div>
              <h3 className="font-pixel text-lg mb-2">SIGN UP</h3>
              <p className="font-body">Create your free PixelPlay account</p>
              {/* Arrow */}
              <div className="hidden md:block absolute right-0 top-8 w-12 h-2 bg-primary transform translate-x-1/2"></div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="w-16 h-16 bg-secondary mx-auto mb-4 flex items-center justify-center">
                <span className="font-pixel text-xl">2</span>
              </div>
              <h3 className="font-pixel text-lg mb-2">CHOOSE GAMES</h3>
              <p className="font-body">Browse our collection of retro classics</p>
              {/* Arrow */}
              <div className="hidden md:block absolute right-0 top-8 w-12 h-2 bg-secondary transform translate-x-1/2"></div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="w-16 h-16 bg-accent mx-auto mb-4 flex items-center justify-center">
                <span className="font-pixel text-xl">3</span>
              </div>
              <h3 className="font-pixel text-lg mb-2">PLAY & COMPETE</h3>
              <p className="font-body">Play games and climb the leaderboards</p>
              {/* Arrow */}
              <div className="hidden md:block absolute right-0 top-8 w-12 h-2 bg-accent transform translate-x-1/2"></div>
            </div>
            
            {/* Step 4 */}
            <div>
              <div className="w-16 h-16 bg-primary mx-auto mb-4 flex items-center justify-center">
                <span className="font-pixel text-xl">4</span>
              </div>
              <h3 className="font-pixel text-lg mb-2">EARN REWARDS</h3>
              <p className="font-body">Unlock achievements and special content</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-pixel text-2xl mb-6">READY TO JOIN THE ADVENTURE?</h2>
          <p className="font-body text-lg mb-8 max-w-2xl mx-auto">
            Start your retro gaming journey today and connect with thousands of players who 
            share your passion for the classics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/signup">
              <a className="font-ui text-base bg-secondary text-white px-8 py-3 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                Sign Up Now
              </a>
            </Link>
            <Link href="/games">
              <a className="font-ui text-base bg-neutral-dark text-white px-8 py-3 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                Browse Games
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-pixel text-2xl mb-12 text-center text-accent">FREQUENTLY ASKED QUESTIONS</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-pixel text-lg mb-3 text-secondary">Is PixelPlay free to use?</h3>
              <p className="font-body mb-6">
                Yes! Basic access to PixelPlay is completely free. We offer premium memberships 
                with additional features for the most dedicated retro gamers.
              </p>
              
              <h3 className="font-pixel text-lg mb-3 text-secondary">What games are available?</h3>
              <p className="font-body mb-6">
                We offer a wide selection of legally licensed classic arcade, console, and computer 
                games from the 70s, 80s, and 90s.
              </p>
            </div>
            
            <div>
              <h3 className="font-pixel text-lg mb-3 text-secondary">Do I need to download anything?</h3>
              <p className="font-body mb-6">
                Not at all! All games run directly in your browser with no downloads required. 
                Just sign up and start playing immediately.
              </p>
              
              <h3 className="font-pixel text-lg mb-3 text-secondary">How do rewards work?</h3>
              <p className="font-body mb-6">
                As you play games and participate in the community, you'll earn points and 
                unlock achievements. These can be used to access exclusive content, special 
                game modes, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-neutral-light text-neutral-dark border-t-2 border-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-pixel text-xl mb-6">JOIN THE PIXELPLAY COMMUNITY TODAY</h2>
          <Link href="/signup">
            <a className="font-ui inline-block text-base bg-primary text-white px-8 py-3 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
              Get Started
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default learnMore;