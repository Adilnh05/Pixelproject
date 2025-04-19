import { Link } from 'wouter';
import { ChartBar, Trophy, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { userProfile, userActivity } from '@/data/mockData';

const UserDashboard = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Dashboard Preview Image */}
          <div className="lg:w-1/2 relative">
            <div className="bg-neutral-dark p-4 rounded-lg shadow-lg">
              <div className="bg-neutral-light p-4 rounded">
                <div className="flex space-x-4 mb-4">
                  <div className="w-16 h-16 bg-accent rounded-full overflow-hidden">
                    <img src={userProfile.avatar} alt="User Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-pixel text-sm">{userProfile.username}</h3>
                    <p className="font-body text-base">Level {userProfile.level} • {userProfile.pixels} Pixels</p>
                    <div className="flex mt-1">
                      <div className="h-2 w-32 bg-neutral-dark rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${userProfile.levelProgress}%` }}
                        ></div>
                      </div>
                      <span className="font-ui text-xs ml-2">{userProfile.levelProgress}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-3 rounded shadow-pixel">
                    <h4 className="font-ui text-xs mb-1">Top Achievement</h4>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#F59E0B] rounded-full mr-2 flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-body text-sm">{userProfile.topAchievement.title}</p>
                        <p className="font-body text-xs text-neutral-dark/70">{userProfile.topAchievement.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded shadow-pixel">
                    <h4 className="font-ui text-xs mb-1">Games Played</h4>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-secondary rounded-full mr-2 flex items-center justify-center">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-lg">{userProfile.gamesPlayed}</p>
                        <p className="font-body text-xs text-neutral-dark/70">This month</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded shadow-pixel">
                  <h4 className="font-ui text-xs mb-3">Recent Activity</h4>
                  <div className="space-y-3">
                    {userActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded mr-2 overflow-hidden">
                            <img src={activity.gameIcon} alt="Game Icon" className="w-full h-full object-cover" />
                          </div>
                          <p className="font-body text-sm">{activity.description}</p>
                        </div>
                        <span className="font-ui text-xs">{activity.timeAgo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pixel art decoration elements */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary transform rotate-12"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent transform -rotate-12"></div>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="font-pixel text-xl mb-6">YOUR <span className="text-primary">PERSONAL</span> GAMING JOURNEY</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <ChartBar className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-ui text-base mb-1">Track Your Progress</h3>
                  <p className="font-body text-lg">See detailed stats of your gaming history, including time played, high scores, and achievements unlocked.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-ui text-base mb-1">Earn Rewards</h3>
                  <p className="font-body text-lg">Complete challenges and earn pixel gems to unlock exclusive characters, themes, and power-ups.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-ui text-base mb-1">Connect with Friends</h3>
                  <p className="font-body text-lg">Challenge friends, join leaderboards, and share your achievements with your gaming community.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/Signup">
                <a className="font-ui text-sm bg-primary text-white px-6 py-3 rounded shadow-pixel hover:shadow-pixel-hover transition-all inline-block">
                  Create Your Profile
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
