import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/useAuth';
import { topPlayers, friends, friendChallenges, games } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {Link} from 'wouter' ;
import { 
  Trophy, 
  Users, 
  MessageSquare, 
  Search, 
  User, 
  UserPlus, 
  Send,
  Clock,
  Star
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Community = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [friendSearch, setFriendSearch] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedFriend, setSelectedFriend] = useState('');
  const [challengeDescription, setChallengeDescription] = useState('');
  const [timeframe, setTimeframe] = useState('This Week');
  

  const filteredFriends = friends.filter(friend => 
    friend.username.toLowerCase().includes(friendSearch.toLowerCase())
  );

  const handleCreateChallenge = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to create challenges.",
        variant: "destructive"
      });
      return;
    }
    
    if (!selectedGame || !selectedFriend || !challengeDescription) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to create a challenge.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Challenge Sent!",
      description: `Your challenge has been sent to ${selectedFriend}.`
    });
    

    setSelectedGame('');
    setSelectedFriend('');
    setChallengeDescription('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          {/* Community Header */}
          <div className="bg-neutral-dark text-white rounded-lg p-8 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-accent mr-3" />
                <h1 className="font-pixel text-2xl">PIXELPLAY COMMUNITY</h1>
              </div>
              <p className="font-body text-xl max-w-2xl mb-6">
                Connect with fellow gamers, join leaderboards, challenge friends, and build your pixel gaming community!
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 transform rotate-12"></div>
            <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-primary transform -rotate-6"></div>
          </div>
          
          {/* Community Content */}
          <Tabs defaultValue="leaderboard" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-muted">
              <TabsTrigger value="leaderboard" className="font-ui">
                <Trophy className="h-4 w-4 mr-2" /> Leaderboard
              </TabsTrigger>
              <TabsTrigger value="friends" className="font-ui">
                <Users className="h-4 w-4 mr-2" /> Friends
              </TabsTrigger>
              <TabsTrigger value="challenges" className="font-ui">
                <MessageSquare className="h-4 w-4 mr-2" /> Challenges
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="leaderboard" className="mt-0">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                  <Card className="shadow-pixel">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="font-pixel text-lg">Top Players</h2>
                        <Select defaultValue={timeframe} onValueChange={setTimeframe}>
                            <SelectTrigger className="font-body text-sm border border-neutral-dark/20 rounded w-36 text-orange-500">
                                <SelectValue placeholder="Select period" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="This Week" className="text-orange-500">This Week</SelectItem>
                                <SelectItem value="This Month" className="text-orange-500">This Month</SelectItem>
                                <SelectItem value="All Time" className="text-orange-500">All Time</SelectItem>
                            </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-4">
                        {topPlayers.map((player, index) => (
                          <div key={player.id} className="flex items-center justify-between py-4 border-b border-neutral-dark/10">
                            <div className="flex items-center">
                              <div className={`w-10 h-10 flex items-center justify-center text-white font-ui mr-4 rounded-full ${
                                index === 0 ? 'bg-[#FFD700]' : 
                                index === 1 ? 'bg-[#C0C0C0]' : 
                                index === 2 ? 'bg-[#CD7F32]' : 'bg-secondary'
                              }`}>
                                {index + 1}
                              </div>
                              <div className="flex items-center">
                                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                                  <img src={player.avatar} alt={player.username} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <p className="font-ui text-base">{player.username}</p>
                                  <div className="flex items-center">
                                    <Trophy className="h-4 w-4 mr-1 text-secondary" />
                                    <span className="font-body text-sm">Level {player.level}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-pixel text-xl text-primary">{player.points.toLocaleString()}</p>
                              <p className="font-body text-sm text-muted-foreground">points</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 text-center">
                        <Button variant="outline" className="font-ui text-sm text-orange-500">
                          View Complete Leaderboard
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:w-1/4">
                  <Card className="shadow-pixel mb-6">
                    <CardContent className="p-6">
                      <h3 className="font-ui text-base mb-4 flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-[#F59E0B]" /> Your Rank
                      </h3>
                      
                      {user ? (
                        <div className="flex flex-col items-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                            <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
                          </div>
                          <p className="font-pixel text-xl text-primary mb-2">#{user.id + 10}</p>
                          <p className="font-ui text-sm mb-4">{user.username}</p>
                          <div className="w-full bg-neutral-light rounded-full h-2.5 mb-4">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <p className="font-body text-sm text-muted-foreground">
                            {8000 - user.pixels} points until next rank
                          </p>
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <User className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                          <p className="font-body text-base mb-4">Please Play to see your rank on the leaderboard</p>
                          <Link href="/games?login=success">
                            <Button className="font-ui text-sm bg-primary text-white">
                              PLAY HERE
                          </Button>
                         </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-pixel">
                    <CardContent className="p-6">
                      <h3 className="font-ui text-base mb-4 flex items-center">
                        <Star className="h-5 w-5 mr-2 text-secondary" /> This Week's Challenge
                      </h3>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4">
                          <img 
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" 
                            alt="Challenge Game" 
                            className="w-full h-full object-cover rounded" 
                          />
                        </div>
                        <h4 className="font-pixel text-sm mb-2">Speed Runner</h4>
                        <p className="font-body text-sm mb-4">Complete Pixel Racer in under 2 minutes</p>
                        <p className="font-ui text-xs text-accent mb-4">Reward: 500 Pixels</p>
                        <Button className="font-ui text-xs bg-secondary text-white w-full">
                          Join Challenge
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="friends" className="mt-0">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3">
                  <div className="mb-6">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search friends..."
                        className="pl-10"
                        value={friendSearch}
                        onChange={(e) => setFriendSearch(e.target.value)}
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredFriends.length > 0 ? (
                      filteredFriends.map(friend => (
                        <Card key={friend.id} className="shadow-pixel">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
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
                                <div className="flex items-center mb-2">
                                  <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                                  <p className="font-body text-xs text-muted-foreground">
                                    Last played {friend.lastPlayed.game} {friend.lastPlayed.when}
                                  </p>
                                </div>
                                <div className="flex space-x-2">
                                  <Button className="font-ui text-xs h-8 bg-primary text-white px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                                    Challenge
                                  </Button>
                                  <Button variant="outline" className="font-ui text-xs h-8 border border-neutral-dark px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all text-orange-500">
                                    <MessageSquare className="h-3 w-3 mr-1" /> Message
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-12">
                        <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-pixel text-base mb-2">No Friends Found</h3>
                        <p className="font-body text-base text-muted-foreground mb-4">
                          {friendSearch ? "No friends match your search." : "You haven't added any friends yet."}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <Card className="shadow-pixel mb-6">
                    <CardContent className="p-6">
                      <h3 className="font-ui text-base mb-4">Find New Friends</h3>
                      <div className="relative mb-4">
                        <Input
                          type="text"
                          placeholder="Search by username..."
                          className="pl-10 text-orange-500 placeholder-orange-500"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                      <Button className="font-ui text-xs w-full bg-accent text-white">
                        <Search className="h-4 w-4 mr-2" /> Find Players
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-pixel">
                    <CardContent className="p-6">
                      <h3 className="font-ui text-base mb-4">Friend Suggestions</h3>
                      <div className="space-y-4">
                        {[
                          {
                            id: 101,
                            username: "PixelArtist",
                            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
                            level: 18
                          },
                          {
                            id: 102,
                            username: "RetroGamer2000",
                            avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
                            level: 15
                          },
                          {
                            id: 103,
                            username: "PixelWarrior",
                            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                            level: 22
                          }
                        ].map(suggestion => (
                          <div key={suggestion.id} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                <img 
                                  src={suggestion.avatar} 
                                  alt={suggestion.username} 
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <div>
                                <p className="font-body text-base">{suggestion.username}</p>
                                <p className="font-body text-xs text-muted-foreground">Level {suggestion.level}</p>
                              </div>
                            </div>
                            <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => {
                              toast({
                                title: "Friend Request Sent",
                                description: `You sent a friend request to ${suggestion.username}.`
                              });
                            }}>
                              <UserPlus className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="challenges" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-pixel">
                  <CardContent className="p-6">
                    <h3 className="font-ui text-base mb-4">Active Challenges</h3>
                    
                    {friendChallenges.length > 0 ? (
                      <div className="space-y-4">
                        {friendChallenges.map((challenge) => (
                          <div key={challenge.id} className="bg-neutral-light/30 rounded-lg p-4 border border-neutral-dark/10">
                            <div className="flex justify-between items-start">
                              <div className="flex">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                                  <img src={challenge.sender.avatar} alt={challenge.sender.username} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <p className="font-body text-base">{challenge.sender.username} challenged you!</p>
                                  <p className="font-body text-sm text-neutral-dark/70">{challenge.description}</p>
                                  <div className="flex items-center mt-1">
                                    <img src={challenge.game.icon} alt={challenge.game.title} className="w-6 h-6 rounded mr-2" />
                                    <p className="font-ui text-xs">
                                      {challenge.targetScore ? `Target Score: ${challenge.targetScore}` : 
                                       challenge.reward ? `Reward: ${challenge.reward} Pixels` : ''}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button className="font-ui text-xs h-8 bg-primary text-white px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                                  Accept
                                </Button>
                                <Button variant="outline" className="font-ui text-xs h-8 border border-neutral-dark px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all text-orange-500">
                                  Decline
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-pixel text-base mb-2">No Active Challenges</h3>
                        <p className="font-body text-base text-muted-foreground">
                          You don't have any active challenges at the moment.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card className="shadow-pixel">
                  <CardContent className="p-6">
                    <h3 className="font-ui text-base mb-4">Create a Challenge</h3>
                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                      <div className="space-y-4">
                        <div>
                          <label className="font-ui text-xs block mb-1">Select Game</label>
                          <Select value={selectedGame} onValueChange={setSelectedGame}>
                            <SelectTrigger className="font-body text-sm border border-neutral-dark/20 rounded text-orange-500">
                              <SelectValue placeholder="Select Game" />
                            </SelectTrigger>
                            <SelectContent>
                              {games.map(game => (
                                <SelectItem key={game.id} value={game.id.toString()}>
                                  {game.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="font-ui text-xs block mb-1 ">Select Friend</label>
                          <Select value={selectedFriend} onValueChange={setSelectedFriend}>
                            <SelectTrigger className="font-body text-sm border border-neutral-dark/20 rounded text-orange-500">
                              <SelectValue placeholder="Select Friend" />
                            </SelectTrigger>
                            <SelectContent>
                              {friends.map(friend => (
                                <SelectItem key={friend.id} value={friend.username}>
                                  {friend.username}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="font-ui text-xs block mb-1 ">Challenge Description</label>
                          <Input
                            type="text"
                            placeholder="Challenge description..."
                            className="font-body text-sm border border-neutral-dark/20 rounded text-orange-500"
                            value={challengeDescription}
                            onChange={(e) => setChallengeDescription(e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label className="font-ui text-xs block mb-1">Pixel Reward (Optional)</label>
                          <Input
                            type="number"
                            placeholder="100"
                            className="font-body text-sm border border-neutral-dark/20 rounded text-orange-500"
                          />
                        </div>
                        
                        <div className="text-right">
                          <Button 
                            className="font-ui text-xs bg-accent text-white px-4 py-2 rounded"
                            disabled={!selectedGame || !selectedFriend || !challengeDescription}
                            onClick={handleCreateChallenge}
                          >
                            <Send className="h-4 w-4 mr-2" /> Send Challenge
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-ui text-sm mb-3">Challenge History</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-neutral-dark/10">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded overflow-hidden mr-2">
                              <img src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1" alt="Game" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-body text-sm">Beat RetroQueen's high score</p>
                              <p className="font-body text-xs text-neutral-dark/70">Completed 3 days ago</p>
                            </div>
                          </div>
                          <Badge className="bg-success">Won</Badge>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-neutral-dark/10">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded overflow-hidden mr-2">
                              <img src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd" alt="Game" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-body text-sm">Puzzle Quest speedrun challenge</p>
                              <p className="font-body text-xs text-neutral-dark/70">Completed 1 week ago</p>
                            </div>
                          </div>
                          <Badge className="bg-destructive">Lost</Badge>
                        </div>
                      </div>
                    </div>
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

export default Community;