import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { rewards, achievements } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { Trophy, Gift, Sparkles, AlertCircle, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const typeColors = {
  skin: 'bg-primary',
  background: 'bg-secondary',
  ability: 'bg-accent',
  level: 'bg-[#10B981]',
  effect: 'bg-[#F59E0B]',
  trophy: 'bg-[#8338EC]',
  powerup: 'bg-[#EF4444]',
  access: 'bg-[#3B82F6]'
};

const Rewards = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('shop');
  
  // Filter rewards by type
  const rewardTypes = [...new Set(rewards.map(r => r.type))];
  const [selectedType, setSelectedType] = useState('all');
  
  const filteredRewards = selectedType === 'all' 
    ? rewards 
    : rewards.filter(r => r.type === selectedType);

  const handleRedeem = (reward: typeof rewards[0]) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to redeem rewards.",
        variant: "destructive",
      });
      return;
    }
    
    if ((user?.pixels || 0) < reward.pixelCost) {
      toast({
        title: "Not Enough Pixels",
        description: `You need ${reward.pixelCost - (user?.pixels || 0)} more pixels to redeem this reward.`,
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Reward Redeemed!",
      description: `You've successfully redeemed ${reward.title}.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          {/* Rewards Header */}
          <div className="bg-neutral-dark text-white rounded-lg p-8 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-[#F59E0B] mr-3" />
                <h1 className="font-pixel text-2xl">REWARDS & ACHIEVEMENTS</h1>
              </div>
              <p className="font-body text-xl max-w-2xl mb-6">
                Earn pixels by playing games and completing achievements. Redeem your pixels for exclusive in-game items, character skins, and more!
              </p>
              
              {user ? (
                <div className="flex items-center font-ui bg-neutral-dark/50 px-4 py-3 rounded-lg w-fit">
                  <Sparkles className="h-5 w-5 text-[#F59E0B] mr-2" />
                  <span>Your Pixel Balance: <span className="text-primary">{user.pixels}</span></span>
                </div>
              ) : (
                <div className="flex items-center font-ui bg-neutral-dark/50 px-4 py-3 rounded-lg w-fit">
                  <AlertCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Log in to track your pixels and redeem rewards</span>
                </div>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F59E0B]/20 transform rotate-12"></div>
            <div className="absolute -bottom-2 left-20 w-8 h-8 bg-primary transform -rotate-6"></div>
          </div>
          
          {/* Rewards Content */}
          <Tabs defaultValue="shop" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-8 bg-muted">
            <TabsTrigger 
              value="shop" 
              className="font-ui px-4 py-2 rounded-md bg-white text-black transition-all data-[state=active]:bg-transparent data-[state=active]:text-orange-500"
            >
              Rewards Shop
            </TabsTrigger>
            <TabsTrigger 
              value="achievements" 
              className="font-ui px-4 py-2 rounded-md bg-white text-black transition-all data-[state=active]:bg-transparent data-[state=active]:text-orange-500"
            >
              Achievements
            </TabsTrigger>
            </TabsList>
            
            <TabsContent value="shop" className="mt-0">
              <div className="mb-6">
                <h2 className="font-pixel text-lg mb-4">BROWSE REWARDS</h2>
                <div className="flex flex-wrap gap-2">
                  <button 
                    className={`font-ui text-xs px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all ${
                      selectedType === 'all' ? 'bg-neutral-dark text-white' : 'border border-neutral-dark'
                    }`}
                    onClick={() => setSelectedType('all')}
                  >
                    All Rewards
                  </button>
                  {rewardTypes.map(type => (
                    <button 
                      key={type}
                      className={`font-ui text-xs px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all ${
                        selectedType === type ? 'bg-neutral-dark text-white' : 'border border-neutral-dark'
                      }`}
                      onClick={() => setSelectedType(type)}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}s
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredRewards.map((reward) => (
                  <Card 
                    key={reward.id} 
                    className="bg-neutral-light/10 rounded-lg overflow-hidden border border-accent/30 transform transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative">
                      <img 
                        src={reward.image} 
                        alt={reward.title} 
                        className="w-full h-48 object-cover" 
                      />
                      <div className="absolute top-0 right-0 bg-[#F59E0B] text-neutral-dark font-ui text-xs px-2 py-1 m-2 rounded flex items-center">
                        {reward.pixelCost} Pixels
                      </div>
                      <Badge 
                        className={`absolute bottom-2 left-2 ${typeColors[reward.type as keyof typeof typeColors]} text-white`}
                      >
                        {reward.type}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-ui text-lg text-orange-500 mb-2">{reward.title}</h3>
                       <p className="font-body text-xl text-blue-300 mb-4">{reward.description}</p>
                      <button 
                        className={`w-full font-ui text-xs ${
                          (!user || (user.pixels < reward.pixelCost)) 
                            ? 'bg-neutral-dark/50 cursor-not-allowed' 
                            : 'bg-[#F59E0B] hover:bg-[#F59E0B]/90'
                        } text-white px-3 py-2 rounded shadow-pixel transition-all flex items-center justify-center`}
                        onClick={() => handleRedeem(reward)}
                        disabled={!user || (user.pixels < reward.pixelCost)}
                      >
                        {(!user || (user.pixels < reward.pixelCost)) && <Lock className="h-3 w-3 mr-1" />}
                        {(!user || (user.pixels < reward.pixelCost)) ? 'Not Enough Pixels' : 'Redeem Reward'}
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="achievements" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map(achievement => (
                  <Card 
                    key={achievement.id} 
                    className={`shadow-pixel ${!achievement.unlocked ? 'opacity-70' : ''}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-white ${
                          achievement.unlocked ? 'bg-[#F59E0B]' : 'bg-neutral-dark/50'
                        }`}>
                          <span role="img" aria-label={achievement.title} className="text-3xl">{achievement.icon}</span>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h3 className="font-ui text-base">{achievement.title}</h3>
                            <Badge className="bg-primary">{achievement.pixelReward} Pixels</Badge>
                          </div>
                          <p className="font-body text-base text-muted-foreground my-1">{achievement.description}</p>
                          {achievement.unlocked ? (
                            <p className="font-body text-xs text-success flex items-center">
                              <Trophy className="h-3 w-3 mr-1" />
                              Unlocked on {achievement.unlockedAt}
                            </p>
                          ) : (
                            <p className="font-body text-xs text-muted-foreground flex items-center">
                              <Lock className="h-3 w-3 mr-1" />
                              Not yet unlocked
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Bonus Section */}
          <div className="mt-12 bg-accent/10 rounded-lg p-6 border border-accent">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3">
                <Gift className="h-24 w-24 text-accent mx-auto" />
              </div>
              <div className="md:w-2/3">
                <h2 className="font-pixel text-xl mb-4 text-center md:text-left">DAILY REWARDS</h2>
                <p className="font-body text-lg mb-6">Log in every day to claim your daily pixel bonus! Consecutive logins increase your rewards.</p>
                <div className="flex justify-center md:justify-start">
                  <button 
                    className="font-ui text-sm bg-accent text-white px-6 py-3 rounded shadow-pixel hover:shadow-pixel-hover transition-all"
                    onClick={() => {
                      if (!user) {
                        toast({
                          title: "Authentication Required",
                          description: "Please log in to claim daily rewards.",
                          variant: "destructive",
                        });
                        return;
                      }
                      
                      toast({
                        title: "Daily Reward Claimed!",
                        description: "You've received 50 pixels as your daily reward.",
                      });
                    }}
                  >
                    Claim Daily Reward
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
