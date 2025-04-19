import { useState } from 'react';
import { Link } from 'wouter';
import { topPlayers, friendChallenges } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

const CommunitySection = () => {
  const [timeFilter, setTimeFilter] = useState('This Week');
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedFriend, setSelectedFriend] = useState('');
  const [challengeDescription, setChallengeDescription] = useState('');

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="font-Pixelt text-xl text-center mb-12">JOIN OUR <span className="text-accent">COMMUNITY</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Leaderboard */}
          <Card className="bg-white rounded-lg shadow-lg p-6"> 
    <div className="flex justify-between items-center mb-4"> 
        <h3 className="font-ui text-base text-orange-500">Top Players</h3> 
        <Select defaultValue={timeFilter} onValueChange={setTimeFilter}> 
            <SelectTrigger className="font-body text-sm border border-neutral-dark/20 rounded w-36 text-orange-500"> 
                <SelectValue placeholder="Select period" /> 
            </SelectTrigger> 
            <SelectContent> 
                <SelectItem value="This Week">This Week</SelectItem> 
                <SelectItem value="This Month">This Month</SelectItem> 
                <SelectItem value="All Time">All Time</SelectItem> 
            </SelectContent> 
        </Select> 
    </div> 


 

            
            <div className="space-y-4">
              {topPlayers.map((player, index) => (
                <div key={player.id} className="flex items-center justify-between py-2 border-b border-neutral-dark/10">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-ui mr-3">
                      {index + 1}
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img src={player.avatar} alt={player.username} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-body text-base">{player.username}</p>
                      <p className="font-body text-xs text-neutral-dark/70">Level {player.level}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-Pixelt text-sm text-primary">{player.points.toLocaleString()}</p>
                    <p className="font-body text-xs text-neutral-dark/70">points</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Link href="/community">
                <a className="font-ui text-xs border border-neutral-dark px-4 py-2 rounded inline-block">
                  View Full Leaderboard
                </a>
              </Link>
            </div>
          </Card>
          
          {/* Friends & Challenges */}
          <Card className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-ui text-base mb-4">Friend Challenges</h3>
            
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
                          {challenge.targetScore ? 'Target Score: ${challenge.targetScore}' : 
                             challenge.reward ? 'Reward: ${challenge.reward} Pixels' : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="font-ui text-xs bg-primary text-white px-3 py-1 rounded">Accept</button>
                      <button className="font-ui text-xs border border-neutral-dark px-3 py-1 rounded">Decline</button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                <h4 className="font-ui text-sm mb-3">Create a Challenge</h4>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-3">
    <Select value={selectedGame} onValueChange={setSelectedGame}>
        <SelectTrigger className="font-body text-sm border border-neutral-dark/20 rounded flex-1 text-orange-500">
            <SelectValue placeholder="Select Game" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="Pixel-dungeon">Pixel Dungeon</SelectItem>
            <SelectItem value="space-invaders">Space Invaders 2.0</SelectItem>
            <SelectItem value="Pixel-racer">Pixel Racer</SelectItem>
        </SelectContent>
    </Select>

    <Select value={selectedFriend} onValueChange={setSelectedFriend}>
        <SelectTrigger className="font-body text-sm border border-neutral-dark/20 rounded flex-1 text-orange-500">
            <SelectValue placeholder="Select Friend" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="retroqueen">RetroQueen</SelectItem>
            <SelectItem value="gameboy99">GameBoy99</SelectItem>
            <SelectItem value="Pixelprincess">PixelPrincess</SelectItem>
        </SelectContent>
    </Select>
</div>
                <div className="mb-3">
                    <Input
                        type="text"
                        placeholder="Challenge description..."
                        className="w-full font-body text-sm border border-neutral-dark/20 rounded p-2 text-orange-500 placeholder-orange-500"
                        value={challengeDescription}
                        onChange={(e) => setChallengeDescription(e.target.value)}
                    />
                </div>
                <div className="text-right">
                  <button 
                    className="font-ui text-xs bg-accent text-white px-4 py-2 rounded"
                    disabled={!selectedGame || !selectedFriend || !challengeDescription}
                  >
                    Send Challenge
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;