import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-pixel text-primary text-lg mb-4">PIXEL<span className="text-secondary">PLAY</span></h3>
            <p className="font-body text-lg mb-4">The ultimate retro gaming platform for pixel art enthusiasts!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9.5 16.5v.5a2 2 0 0 0 2 2h.5"></path>
                  <path d="M3 12v.5a2 2 0 0 0 2 2h.5"></path>
                  <path d="M15 12h.5a2 2 0 0 1 2 2v3.5"></path>
                  <path d="M7 8h10"></path>
                  <path d="M12 4v4"></path>
                  <path d="M19 12h2v4a2 2 0 0 1-2 2h-4"></path>
                  <path d="M3 12h2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M15 20v-8"></path>
                  <path d="M9 20v-8"></path>
                  <path d="M9 8v4"></path>
                  <path d="M15 8v4"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-ui text-sm mb-4">GAMES</h4>
            <ul className="font-body text-base space-y-2">
              <li><Link href="/games"><a className="hover:text-primary transition-colors">All Games</a></Link></li>
              <li><Link href="/games?filter=top"><a className="hover:text-primary transition-colors">Top Rated</a></Link></li>
              <li><Link href="/games?filter=new"><a className="hover:text-primary transition-colors">New Releases</a></Link></li>
              <li><Link href="/games?filter=coming"><a className="hover:text-primary transition-colors">Coming Soon</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-ui text-sm mb-4">COMMUNITY</h4>
            <ul className="font-body text-base space-y-2">
              <li><Link href="/community"><a className="hover:text-primary transition-colors">Leaderboards</a></Link></li>
              <li><Link href="/community/forums"><a className="hover:text-primary transition-colors">Forums</a></Link></li>
              <li><Link href="/community/events"><a className="hover:text-primary transition-colors">Events</a></Link></li>
              <li><Link href="/support"><a className="hover:text-primary transition-colors">Support</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-ui text-sm mb-4">LEGAL</h4>
            <ul className="font-body text-base space-y-2">
              <li><Link href="/terms"><a className="hover:text-primary transition-colors">Terms of Service</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/cookies"><a className="hover:text-primary transition-colors">Cookie Policy</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="font-body text-sm">© 2025 PixelPlay. All rights reserved. All pixel art and game assets belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
