import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/hooks/useAuth';
import { 
  Home, 
  Trophy, 
  ShoppingBag, 
  Settings, 
  LogOut, 
  CreditCard, 
  History, 
  Gamepad2, 
  Edit
} from 'lucide-react';

const account = () => {
  const [location, navigate] = useLocation();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: user?.username || 'Player1',
    bio: user?.bio || 'No bio yet...',
    email: user?.email || 'player@example.com',
  });


  const [stats, setStats] = useState({
    gamesPlayed: 42,
    highestScore: 9870,
    totalPoints: 12580,
    rank: 'Pixel Master',
    achievements: 15,
    coins: 1250,
  });


  const [purchaseHistory, setPurchaseHistory] = useState([
    { id: 1, item: 'Retro Avatar Pack', date: '2025-04-12', cost: 200 },
    { id: 2, item: 'Power Boost', date: '2025-04-05', cost: 50 },
    { id: 3, item: 'Exclusive Game Theme', date: '2025-03-27', cost: 300 },
  ]);


  const [gameHistory, setGameHistory] = useState([
    { id: 1, game: 'Pixel Platformer', date: '2025-04-14', score: 5400 },
    { id: 2, game: 'Retro Racer', date: '2025-04-13', score: 3200 },
    { id: 3, game: 'Space Invaders', date: '2025-04-10', score: 9870 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsEditing(false);

    alert('Profile updated successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-neutral-dark min-h-screen text-white pb-12">
      {/* Header with home button */}
      <div className="bg-neutral-darker py-6 mb-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-pixel text-3xl text-primary">
              USER <span className="text-secondary">PROFILE</span>
            </h1>
            <Link href="/games?login=success">
              <button className="flex items-center font-ui bg-primary text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                <Home size={16} className="mr-2" />
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 bg-neutral-darker p-6 rounded-lg shadow-pixel h-fit">
            {/* User avatar and name */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary">
                <img
                  src={user?.avatar || 'data:image/jpeg;base64,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'}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-pixel text-xl text-primary">{userInfo.username}</h2>
              <div className="mt-2 flex items-center">
                <span className="bg-secondary text-xs py-1 px-3 rounded-full">{stats.rank}</span>
                <div className="flex items-center ml-2">
                  <Trophy size={14} className="text-yellow-400" />
                  <span className="text-xs ml-1">{stats.achievements}</span>
                </div>
              </div>
            </div>

            {/* Navigation tabs */}
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center font-ui py-2 px-4 rounded transition-colors ${
                  activeTab === 'overview' ? 'bg-primary text-white' : 'hover:bg-neutral-medium'
                }`}
              >
                <Gamepad2 size={18} className="mr-2" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`w-full flex items-center font-ui py-2 px-4 rounded transition-colors ${
                  activeTab === 'achievements' ? 'bg-primary text-white' : 'hover:bg-neutral-medium'
                }`}
              >
                <Trophy size={18} className="mr-2" />
                Achievements
              </button>
              <button
                onClick={() => setActiveTab('shop')}
                className={`w-full flex items-center font-ui py-2 px-4 rounded transition-colors ${
                  activeTab === 'shop' ? 'bg-primary text-white' : 'hover:bg-neutral-medium'
                }`}
              >
                <ShoppingBag size={18} className="mr-2" />
                Shop
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`w-full flex items-center font-ui py-2 px-4 rounded transition-colors ${
                  activeTab === 'history' ? 'bg-primary text-white' : 'hover:bg-neutral-medium'
                }`}
              >
                <History size={18} className="mr-2" />
                Game History
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center font-ui py-2 px-4 rounded transition-colors ${
                  activeTab === 'settings' ? 'bg-primary text-white' : 'hover:bg-neutral-medium'
                }`}
              >
                <Settings size={18} className="mr-2" />
                Settings
              </button>
              <Link href="/">
              <button
                onClick={logout}
                className="w-full flex items-center font-ui py-2 px-4 rounded hover:bg-red-500 hover:text-white transition-colors"
              >
                <LogOut size={18} className="mr-2" />
                Logout
              </button>
              </Link>
            </nav>
            
            {/* Coins display */}
            <div className="mt-8 bg-neutral-medium p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="ml-2 font-pixel">COINS</span>
              </div>
              <span className="font-pixel text-yellow-400">{stats.coins}</span>
            </div>
          </div>

          {/* Main content area */}
          <div className="md:col-span-3 bg-neutral-darker p-6 rounded-lg shadow-pixel">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-pixel text-2xl text-primary">Player Stats</h3>
                  <button 
                    onClick={() => setIsEditing(!isEditing)} 
                    className="flex items-center font-ui text-xs bg-accent text-white px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all"
                  >
                    <Edit size={14} className="mr-1" />
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </button>
                </div>

                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-ui mb-1 text-gray-300">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={userInfo.username}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-medium border border-neutral-light rounded px-3 py-2 font-ui text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-ui mb-1 text-gray-300">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-medium border border-neutral-light rounded px-3 py-2 font-ui text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-ui mb-1 text-gray-300">Bio</label>
                      <textarea
                        name="bio"
                        value={userInfo.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-neutral-medium border border-neutral-light rounded px-3 py-2 font-ui text-white"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button 
                        type="submit"
                        className="font-ui bg-secondary text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-neutral-medium p-4 rounded-lg">
                        <h4 className="font-ui text-gray-300 mb-1">Username</h4>
                        <p className="font-pixel text-white">{userInfo.username}</p>
                      </div>
                      <div className="bg-neutral-medium p-4 rounded-lg">
                        <h4 className="font-ui text-gray-300 mb-1">Email</h4>
                        <p className="font-ui text-white">{userInfo.email}</p>
                      </div>
                      <div className="bg-neutral-medium p-4 rounded-lg">
                        <h4 className="font-ui text-gray-300 mb-1">Games Played</h4>
                        <p className="font-pixel text-white">{stats.gamesPlayed}</p>
                      </div>
                      <div className="bg-neutral-medium p-4 rounded-lg">
                        <h4 className="font-ui text-gray-300 mb-1">Highest Score</h4>
                        <p className="font-pixel text-white">{stats.highestScore}</p>
                      </div>
                    </div>

                    <div className="bg-neutral-medium p-4 rounded-lg mb-8">
                      <h4 className="font-ui text-gray-300 mb-1">Bio</h4>
                      <p className="font-ui text-white">{userInfo.bio}</p>
                    </div>

                    <h3 className="font-pixel text-xl text-primary mb-4">Recent Games</h3>
                    <div className="bg-neutral-medium p-4 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left border-b border-neutral-light">
                            <th className="font-ui text-gray-300 pb-2">Game</th>
                            <th className="font-ui text-gray-300 pb-2">Date</th>
                            <th className="font-ui text-gray-300 pb-2">Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {gameHistory.map(item => (
                            <tr key={item.id} className="border-b border-neutral-light">
                              <td className="py-2 font-ui">{item.game}</td>
                              <td className="py-2 font-ui">{item.date}</td>
                              <td className="py-2 font-pixel text-primary">{item.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className="font-pixel text-2xl text-primary mb-6">Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Achievement cards */}
                  <div className="bg-neutral-medium p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-pixel text-yellow-400">First Victory</h4>
                    <p className="text-sm font-ui text-gray-300 mt-1">Win your first game</p>
                  </div>
                  <div className="bg-neutral-medium p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-pixel text-yellow-400">High Scorer</h4>
                    <p className="text-sm font-ui text-gray-300 mt-1">Score over 5,000 points</p>
                  </div>
                  <div className="bg-neutral-medium p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-pixel text-yellow-400">Dedicated Gamer</h4>
                    <p className="text-sm font-ui text-gray-300 mt-1">Play 25 games</p>
                  </div>
                  <div className="bg-neutral-medium p-4 rounded-lg border-l-4 border-gray-500">
                    <h4 className="font-pixel text-gray-400">Speed Demon</h4>
                    <p className="text-sm font-ui text-gray-300 mt-1">Complete a level in under 30 seconds</p>
                  </div>
                  <div className="bg-neutral-medium p-4 rounded-lg border-l-4 border-gray-500">
                    <h4 className="font-pixel text-gray-400">Perfectionist</h4>
                    <p className="text-sm font-ui text-gray-300 mt-1">Complete a level with 100% accuracy</p>
                  </div>
                  <div className="bg-neutral-medium p-4 rounded-lg border-l-4 border-gray-500">
                    <h4 className="font-pixel text-gray-400">Collector</h4>
                    <p className="text-sm font-ui text-gray-300 mt-1">Unlock all customization options</p>
                  </div>
                </div>
              </div>
            )}

            {/* Shop Tab */}
            {activeTab === 'shop' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-pixel text-2xl text-primary">Shop</h3>
                  <div className="flex items-center bg-neutral-medium px-4 py-2 rounded-lg">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <span className="ml-2 font-pixel text-yellow-400">{stats.coins}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-neutral-medium p-4 rounded-lg hover:shadow-lg transition-all cursor-pointer">
                    <div className="h-32 bg-neutral-dark rounded-lg mb-3 flex items-center justify-center">
                      <img src="https://i.makeagif.com/media/4-03-2023/r-Sxbz.gif" alt="w-16 h-16" />
                    </div>
                    <h4 className="font-pixel text-white">Cosmic Avatar Pack</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="flex items-center font-ui text-yellow-400">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
                        350
                      </span>
                      <button className="font-ui text-xs bg-primary text-white px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                        Purchase
                      </button>
                    </div>
                  </div>

                  <div className="bg-neutral-medium p-4 rounded-lg hover:shadow-lg transition-all cursor-pointer">
                    <div className="h-32 bg-neutral-dark rounded-lg mb-3 flex items-center justify-center">
                      <img src="https://www.icegif.com/wp-content/uploads/2022/11/icegif-317.gif" alt="" />
                    </div>
                    <h4 className="font-pixel text-white">Double XP Boost</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="flex items-center font-ui text-yellow-400">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
                        200
                      </span>
                      <button className="font-ui text-xs bg-primary text-white px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                        Purchase
                      </button>
                    </div>
                  </div>

                  <div className="bg-neutral-medium p-4 rounded-lg hover:shadow-lg transition-all cursor-pointer">
                    <div className="h-32 bg-neutral-dark rounded-lg mb-3 flex items-center justify-center">
                      <img src="https://i.gifer.com/7c77.gif" alt="w-16 h-16" />
                    </div>
                    <h4 className="font-pixel text-white">Premium Game Theme</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="flex items-center font-ui text-yellow-400">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
                        500
                      </span>
                      <button className="font-ui text-xs bg-primary text-white px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>

                <h3 className="font-pixel text-xl text-primary mt-8 mb-4">Purchase History</h3>
                <div className="bg-neutral-medium p-4 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-neutral-light">
                        <th className="font-ui text-gray-300 pb-2">Item</th>
                        <th className="font-ui text-gray-300 pb-2">Date</th>
                        <th className="font-ui text-gray-300 pb-2">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchaseHistory.map(item => (
                        <tr key={item.id} className="border-b border-neutral-light">
                          <td className="py-2 font-ui">{item.item}</td>
                          <td className="py-2 font-ui">{item.date}</td>
                          <td className="py-2 font-ui">
                            <span className="flex items-center text-yellow-400">
                              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
                              {item.cost}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div>
                <h3 className="font-pixel text-2xl text-primary mb-6">Game History</h3>
                <div className="bg-neutral-medium p-4 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-neutral-light">
                        <th className="font-ui text-gray-300 pb-2">Game</th>
                        <th className="font-ui text-gray-300 pb-2">Date</th>
                        <th className="font-ui text-gray-300 pb-2">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gameHistory.map(item => (
                        <tr key={item.id} className="border-b border-neutral-light">
                          <td className="py-2 font-ui">{item.game}</td>
                          <td className="py-2 font-ui">{item.date}</td>
                          <td className="py-2 font-pixel text-primary">{item.score}</td>
                        </tr>
                      ))}
                      <tr className="border-b border-neutral-light">
                        <td className="py-2 font-ui">Puzzle Master</td>
                        <td className="py-2 font-ui">2025-04-08</td>
                        <td className="py-2 font-pixel text-primary">7500</td>
                      </tr>
                      <tr className="border-b border-neutral-light">
                        <td className="py-2 font-ui">Pixel Platformer</td>
                        <td className="py-2 font-ui">2025-04-07</td>
                        <td className="py-2 font-pixel text-primary">4200</td>
                      </tr>
                      <tr className="border-b border-neutral-light">
                        <td className="py-2 font-ui">Space Invaders</td>
                        <td className="py-2 font-ui">2025-04-05</td>
                        <td className="py-2 font-pixel text-primary">8120</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8">
                  <h3 className="font-pixel text-xl text-primary mb-4">Monthly Stats</h3>
                  <div className="bg-neutral-medium p-4 rounded-lg">
                    <div className="h-64 bg-neutral-dark rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-ui text-gray-300">Data not available</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h3 className="font-pixel text-2xl text-primary mb-6">Account Settings</h3>
                
                <div className="space-y-6">
                  <div className="bg-neutral-medium p-6 rounded-lg">
                    <h4 className="font-pixel text-lg text-white mb-4">Change Password</h4>
                    <form className="space-y-4">
                    <div>
                    <label className="block text-sm font-ui mb-1 text-gray-300">Current Password</label>
                    <input
                    type="password"
                    className="w-full bg-neutral-dark border border-neutral-light rounded px-3 py-2 font-ui text-orange-500"
                     />
                    </div>
                      <div>
                        <label className="block text-sm font-ui mb-1 text-gray-300">New Password</label>
                        <input
                          type="password"
                          className="w-full bg-neutral-dark border border-neutral-light rounded px-3 py-2 font-ui text-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-ui mb-1 text-gray-300">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full bg-neutral-dark border border-neutral-light rounded px-3 py-2 font-ui text-orange-500"
                        />
                      </div>
                      <div>
                        <button className="font-ui bg-primary text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="bg-neutral-medium p-6 rounded-lg">
                    <h4 className="font-pixel text-lg text-white mb-4">Notification Settings</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="font-ui">Game Updates</label>
                        <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="font-ui">Achievement Notifications</label>
                        <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="font-ui">Friend Requests</label>
                        <div className="w-12 h-6 bg-neutral-dark rounded-full relative cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="font-ui">Marketing Emails</label>
                        <div className="w-12 h-6 bg-neutral-dark rounded-full relative cursor-pointer">
                          <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-medium p-6 rounded-lg">
                    <h4 className="font-pixel text-lg text-white mb-4">Payment Methods</h4>
                    <div className="flex items-center justify-between p-3 border border-neutral-light rounded mb-4">
                      <div className="flex items-center">
                        <CreditCard className="mr-3 text-gray-300" />
                        <div>
                          <p className="font-ui">•••• •••• •••• 4242</p>
                          <p className="text-xs text-gray-400 font-ui">Expires 12/26</p>
                        </div>
                      </div>
                      <button className="text-xs font-ui text-primary hover:text-secondary">Remove</button>
                    </div>
                    <button className="font-ui text-sm bg-neutral-dark text-white px-4 py-2 rounded border border-neutral-light hover:bg-neutral-medium transition-colors">
                      + Add Payment Method
                    </button>
                  </div>

                  <div className="bg-neutral-medium p-6 rounded-lg">
                    <h4 className="font-pixel text-lg text-red-500 mb-4">Danger Zone</h4>
                    <p className="text-sm text-gray-300 font-ui mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="font-ui bg-red-500 text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default account;