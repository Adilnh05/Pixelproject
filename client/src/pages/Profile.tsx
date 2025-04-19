import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/useAuth';
import { achievements, gameHistory, friends } from '@/data/mockData';
import { Trophy, Clock, Star, Users, ChartLine, Calendar } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <Card className="w-full max-w-md mx-4 shadow-pixel">
            <CardContent className="p-8 text-center">
              <h1 className="font-pixel text-xl mb-4">PROFILE LOCKED</h1>
              <p className="font-body text-lg mb-6">Please log in to view your profile.</p>
              <button 
                className="font-ui text-sm bg-primary text-white px-6 py-3 rounded shadow-pixel hover:shadow-pixel-hover transition-all"
                onClick={() => window.history.back()}
              >
                Go Back
              </button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          {/* Profile Header */}
          <div className="bg-neutral-dark rounded-lg p-6 text-white mb-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
              <div className="bg-accent rounded-full w-24 h-24 md:w-32 md:h-32 overflow-hidden border-4 border-white shadow-lg">
                <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
              </div>

              <div className="flex-grow text-center md:text-left">
                <h1 className="font-pixel text-xl md:text-2xl mb-2">{user.username}</h1>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-4 font-body text-lg">
                  <div className="flex items-center justify-center md:justify-start">
                    <Star className="h-5 w-5 mr-2 text-[#F59E0B]" /> Level {user.level}
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Trophy className="h-5 w-5 mr-2 text-primary" /> {user.pixels} Pixels
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Users className="h-5 w-5 mr-2 text-secondary" /> {friends.length} Friends
                  </div>
                </div>

                <div className="w-full max-w-md">
                  <div className="flex items-center mb-1">
                    <p className="font-ui text-xs mr-2">Level Progress:</p>
                    <span className="font-ui text-xs">65%</span>
                  </div>
                  <Progress value={65} className="h-2 bg-neutral-dark/50" indicatorClassName="bg-primary" />
                </div>
              </div>
            </div>

            {/* Decorative pixels */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/20 transform rotate-45"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-primary/20 transform -rotate-12"></div>
          </div>

          {/* Profile Content */}
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-8 bg-muted">
              <TabsTrigger value="overview" className="font-ui">Overview</TabsTrigger>
              <TabsTrigger value="achievements" className="font-ui">Achievements</TabsTrigger>
              <TabsTrigger value="history" className="font-ui">Game History</TabsTrigger>
              <TabsTrigger value="friends" className="font-ui">Friends</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-pixel">
                  <CardContent className="p-6">
                    <h2 className="font-pixel text-base mb-4 flex items-center">
                      <Trophy className="h-5 w-5 mr-2 text-[#F59E0B]" /> Recent Achievements
                    </h2>
                    <div className="space-y-4">
                      {achievements.filter(a => a.unlocked).slice(0, 3).map(achievement => (
                        <div key={achievement.id} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white">
                            <span role="img" aria-label={achievement.title}>{achievement.icon}</span>
                          </div>
                          <div>
                            <p className="font-ui text-sm">{achievement.title}</p>
                            <p className="font-body text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-pixel">
                  <CardContent className="p-6">
                    <h2 className="font-pixel text-base mb-4 flex items-center">
                      <ChartLine className="h-5 w-5 mr-2 text-secondary" /> Gaming Stats
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <p className="font-body text-base">Games Played</p>
                        <p className="font-pixel text-sm text-primary">{gameHistory.length}</p>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <p className="font-body text-base">Total Play Time</p>
                        <p className="font-pixel text-sm text-primary">
                          {gameHistory.reduce((acc, game) => acc + game.timePlayed, 0)} min
                        </p>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <p className="font-body text-base">Games Completed</p>
                        <p className="font-pixel text-sm text-primary">
                          {gameHistory.filter(game => game.completed).length}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-pixel">
                  <CardContent className="p-6">
                    <h2 className="font-pixel text-base mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-accent" /> Friend Activity
                    </h2>
                    <div className="space-y-4">
                      {friends.slice(0, 3).map(friend => (
                        <div key={friend.id} className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                              <img src={friend.avatar} alt={friend.username} className="w-full h-full object-cover" />
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${
                              friend.status === 'online' ? 'bg-success' : 'bg-neutral-dark/50'
                            } border border-white`}></div>
                          </div>
                          <div>
                            <p className="font-body text-base">{friend.username}</p>
                            <p className="font-body text-xs text-muted-foreground">
                              Played {friend.lastPlayed.game} {friend.lastPlayed.when}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map(achievement => (
                  <Card 
                    key={achievement.id} 
                    className={`shadow-pixel ${!achievement.unlocked ? 'opacity-60' : ''}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                          achievement.unlocked ? 'bg-[#F59E0B]' : 'bg-neutral-dark/50'
                        }`}>
                          <span role="img" aria-label={achievement.title} className="text-2xl">{achievement.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-ui text-base">{achievement.title}</h3>
                          <p className="font-body text-base text-muted-foreground mb-2">{achievement.description}</p>
                          <div className="flex items-center">
                            <div className="flex items-center text-primary mr-4">
                              <Trophy className="h-4 w-4 mr-1" />
                              <span className="font-ui text-xs">{achievement.pixelReward} Pixels</span>
                            </div>
                            {achievement.unlocked && (
                              <div className="flex items-center text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span className="font-body text-xs">Unlocked: {achievement.unlockedAt}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-0">
              <div className="space-y-4">
                {gameHistory.map(entry => (
                  <Card key={entry.id} className="shadow-pixel">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="w-16 h-16 rounded overflow-hidden">
                          <img 
                            src={entry.game.coverImage} 
                            alt={entry.game.title} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-pixel text-sm">{entry.game.title}</h3>
                          <div className="flex flex-wrap gap-4 mt-1">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1 text-primary" />
                              <span className="font-body text-sm">{entry.score} points</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1 text-accent" />
                              <span className="font-body text-sm">{entry.timePlayed} minutes</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`inline-block px-2 py-1 rounded font-ui text-xs ${
                            entry.completed ? 'bg-success/20 text-success' : 'bg-secondary/20 text-secondary'
                          }`}>
                            {entry.completed ? 'Completed' : 'In Progress'}
                          </div>
                          <p className="font-body text-xs text-muted-foreground mt-1">
                            {entry.playedAt}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="friends" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {friends.map(friend => (
                  <Card key={friend.id} className="shadow-pixel">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden">
                            <img src={friend.avatar} alt={friend.username} className="w-full h-full object-cover" />
                          </div>
                          <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full ${
                            friend.status === 'online' ? 'bg-success' : 'bg-neutral-dark/50'
                          } border-2 border-white`}></div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h3 className="font-ui text-base">{friend.username}</h3>
                            <span className="font-body text-sm text-muted-foreground">Lvl {friend.level}</span>
                          </div>
                          <p className="font-body text-sm mb-2">Last played {friend.lastPlayed.game} {friend.lastPlayed.when}</p>
                          <div className="flex space-x-2">
                            <button className="font-ui text-xs bg-primary text-white px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                              Challenge
                            </button>
                            <button className="font-ui text-xs border border-neutral-dark px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                              Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="shadow-pixel border-2 border-dashed border-accent/30 flex items-center justify-center">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-ui text-base mb-2">Add New Friends</h3>
                    <p className="font-body text-sm text-muted-foreground mb-4">Find more pixel pals to challenge and play with!</p>
                    <button className="font-ui text-xs bg-accent text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                      Find Friends
                    </button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
