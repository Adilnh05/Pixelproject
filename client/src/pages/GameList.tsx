import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { games } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, Search, GamepadIcon } from 'lucide-react';

type GameCategory = 'All' | 'Action' | 'Adventure' | 'Puzzle' | 'Arcade' | 'Racing' | 'Strategy' | 'RPG' | 'Multiplayer' | 'Platformer' | 'Sandbox' | 'Survival' | 'Horror';

const GameList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GameCategory>('All');
  const [filteredGames, setFilteredGames] = useState(games);
  
  // Extract all unique categories from games
  const allCategories = ['All', ...new Set(games.flatMap(game => game.categories))] as GameCategory[];
  
  useEffect(() => {
    // Filter games based on search query and selected category
    let result = games;
    
    if (searchQuery) {
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      result = result.filter(game => game.categories.includes(selectedCategory));
    }
    
    setFilteredGames(result);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-8 px-4 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            {/* Hero Section */}
            <div className="bg-neutral-dark text-white rounded-lg p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="font-pixel text-2xl md:text-3xl mb-4"> WELCOME TO <span className="text-primary">VINTAGE GAMEING</span> COMMUNITY</h1>
                <p className="font-body text-xl max-w-xl mb-6">Discover our collection of retro-style pixel games. From action adventures to brain-teasing puzzles, there's something for every gamer!</p>
                <div className="relative w-full max-w-md">
                  <Input
                    type="text"
                    placeholder="Search games..."
                    className="w-full bg-white/10 border-white/20 text-white font-body placeholder:text-white/50 pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute top-0 left-20 w-4 h-4 bg-secondary animate-pulse"></div>
              <div className="absolute bottom-10 right-20 w-6 h-6 bg-accent animate-float"></div>
            </div>
            
            {/* Game Filters */}
            <div>
              <h2 className="font-pixel text-lg mb-4">BROWSE BY CATEGORY</h2>
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-2">
                  {allCategories.map(category => (
                    <button
                      key={category}
                      className={`whitespace-nowrap font-ui text-xs px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all ${
                        selectedCategory === category 
                          ? 'bg-neutral-dark text-white' 
                          : 'border border-neutral-dark'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Games List */}
            <div>
              <Tabs defaultValue="grid" className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-pixel text-lg">
                    {filteredGames.length} {selectedCategory !== 'All' ? selectedCategory : ''} GAMES
                  </h2>
                  <TabsList className="bg-muted">
                    <TabsTrigger value="grid" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                      </svg>
                    </TabsTrigger>
                    <TabsTrigger value="list" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                      </svg>
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="grid" className="mt-0">
                  {filteredGames.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredGames.map(game => (
                        <Card 
                          key={game.id}
                          className="bg-white rounded-lg overflow-hidden shadow-pixel transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                          <div className="relative">
                            <img 
                              src={game.coverImage} 
                              alt={game.title} 
                              className="w-full h-48 object-cover" 
                            />
                            <div className="absolute top-0 right-0 bg-primary text-white font-ui text-xs px-2 py-1 m-2 rounded flex items-center">
                              {game.rating} <Star className="ml-1 h-3 w-3 fill-current" />
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-pixel text-sm mb-2">{game.title}</h3>
                            <p className="font-body text-sm mb-4">{game.description}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex flex-wrap gap-2">
                                {game.categories.slice(0, 2).map(category => (
                                  <Badge 
                                    key={`${game.id}-${category}`}
                                    variant="secondary"
                                    className={`font-ui text-xs ${
                                      category === 'Adventure' || category === 'Racing' ? 'bg-secondary' :
                                      category === 'RPG' || category === 'Multiplayer' || category === 'Strategy' ? 'bg-accent' :
                                      'bg-neutral-dark'
                                    } text-white hover:${category === 'Adventure' || category === 'Racing' ? 'bg-secondary/90' :
                                                          category === 'RPG' || category === 'Multiplayer' || category === 'Strategy' ? 'bg-accent/90' :
                                                          'bg-neutral-dark/90'}`}
                                  >
                                    {category}
                                  </Badge>
                                ))}
                              </div>
                              <button className="font-ui text-xs bg-primary text-white px-3 py-1 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                                Play
                              </button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <GamepadIcon className="h-16 w-16 text-muted-foreground mb-4" />
                      <h3 className="font-pixel text-lg mb-2">No Games Found</h3>
                      <p className="font-body text-base text-muted-foreground max-w-md">
                        We couldn't find any games matching your search criteria. Try adjusting your filters or search query.
                      </p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="list" className="mt-0">
                  {filteredGames.length > 0 ? (
                    <div className="space-y-4">
                      {filteredGames.map(game => (
                        <Card 
                          key={game.id}
                          className="bg-white overflow-hidden shadow-pixel transition-all duration-300 hover:shadow-xl"
                        >
                          <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-48 h-48 sm:h-auto">
                              <img 
                                src={game.coverImage} 
                                alt={game.title} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <CardContent className="flex-grow p-4 flex flex-col justify-between">
                              <div>
                                <div className="flex items-start justify-between">
                                  <h3 className="font-pixel text-base mb-2">{game.title}</h3>
                                  <div className="bg-primary text-white font-ui text-xs px-2 py-1 rounded flex items-center">
                                    {game.rating} <Star className="ml-1 h-3 w-3 fill-current" />
                                  </div>
                                </div>
                                <p className="font-body text-base mb-4">{game.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {game.categories.map(category => (
                                    <Badge 
                                      key={`${game.id}-${category}`}
                                      variant="secondary"
                                      className={`font-ui text-xs ${
                                        category === 'Adventure' || category === 'Racing' ? 'bg-secondary' :
                                        category === 'RPG' || category === 'Multiplayer' || category === 'Strategy' ? 'bg-accent' :
                                        'bg-neutral-dark'
                                      } text-white hover:${category === 'Adventure' || category === 'Racing' ? 'bg-secondary/90' :
                                                            category === 'RPG' || category === 'Multiplayer' || category === 'Strategy' ? 'bg-accent/90' :
                                                            'bg-neutral-dark/90'}`}
                                    >
                                      {category}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex justify-end">
                                <button className="font-ui text-sm bg-primary text-white px-4 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                                  Play Now
                                </button>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <GamepadIcon className="h-16 w-16 text-muted-foreground mb-4" />
                      <h3 className="font-pixel text-lg mb-2">No Games Found</h3>
                      <p className="font-body text-base text-muted-foreground max-w-md">
                        We couldn't find any games matching your search criteria. Try adjusting your filters or search query.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GameList;
