import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Home } from 'lucide-react';


const Signup = () => {
  const [, navigate] = useLocation();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      setLoading(true);
      await signup(formData.username, formData.email, formData.password);
      navigate('/games'); // Changed to redirect to games page
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-dark flex flex-col">
      {/* Top navigation bar with home button */}
      <div className="bg-neutral-dark text-white py-4 px-6 flex justify-between items-center shadow-md">
        <Link href="/" className="flex items-center">
          <h1 className="font-pixel text-xl text-primary mr-2">
            PIXEL<span className="text-secondary">PLAY</span>
          </h1>
          <div className="w-6 h-6 bg-accent rounded-sm animate-pixel-bounce ml-2"></div>
        </Link>
        <Link href="/" className="flex items-center bg-primary hover:bg-primary/80 px-3 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
          <Home size={18} className="mr-2" />
          <span className="font-ui text-xs">Home</span>
        </Link>
      </div>
      
      {/* Main content */}
      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-neutral-medium p-8 rounded-lg shadow-pixel border-2 border-primary">
          <h2 className="text-2xl font-pixel text-center text-primary mb-8">CREATE ACCOUNT</h2>
          
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-500 p-3 rounded-md mb-6 text-sm font-ui">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block font-ui text-white text-sm mb-2" htmlFor="username">
                Username
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                className="font-ui bg-neutral-dark border-accent text-primary placeholder-gray-400 w-full"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
              />
            </div>
            
            <div className="mb-5">
              <label className="block font-ui text-white text-sm mb-2" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                className="font-ui bg-neutral-dark border-accent text-primary placeholder-gray-400 w-full"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            
            <div className="mb-5">
              <label className="block font-ui text-white text-sm mb-2" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                className="font-ui bg-neutral-dark border-accent text-primary placeholder-gray-400 w-full"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
            </div>
            
            <div className="mb-6">
              <label className="block font-ui text-white text-sm mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="font-ui bg-neutral-dark border-accent text-primary placeholder-gray-400 w-full"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
            </div>
            <Link href="/games">
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-secondary hover:bg-secondary/80 text-white font-pixel py-3 shadow-pixel hover:shadow-pixel-hover transition-all"
            >
              {loading ? 'Creating Account...' : 'SIGN UP'}
            </Button>
            </Link>
            
            <div className="mt-6 text-center">
              <p className="font-ui text-white text-sm">
                Already have an account?{' '}
                <Link href="/games" className="text-primary hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-neutral-dark border-t border-neutral-medium py-4 text-center text-white text-xs font-ui">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-4">
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-primary">Contact Us</Link>
          </div>
          <p className="mt-2">© {new Date().getFullYear()} PixelPlay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Signup;