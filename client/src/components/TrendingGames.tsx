import { useState } from 'react';
import { Link } from 'wouter';
import { games } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";


type GameCategory = 'All' | 'Action' | 'Adventure' | 'Puzzle' | 'Arcade' | 'Racing' | 'Strategy' | 'RPG' | 'Multiplayer';

const TrendingGames = () => {
  const [activeCategory, setActiveCategory] = useState<GameCategory>('All');

  const filteredGames = activeCategory === 'All' 
    ? games 
    : games.filter(game => game.categories.includes(activeCategory));

  const categories: GameCategory[] = ['All', 'Action', 'Adventure', 'Puzzle', 'Arcade', 'Racing', 'RPG'];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="font-pixel text-xl text-neutral-dark">TRENDING GAMES</h2>
          <div className="flex flex-wrap gap-2">
          {categories.map(category => (
  <Button 
    key={category}
    variant={activeCategory === category ? "default" : "outline"}
    className="hover-category text-lg px-6 py-3 rounded-lg"
    onClick={() => setActiveCategory(category)}
  >
    {category}
  </Button>
))}

          </div>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                      <span 
                        key={`${game.id}-${category}`}
                        className={`inline-block ${
                          category === 'Adventure' || category === 'Racing' ? 'bg-secondary' :
                          category === 'RPG' || category === 'Multiplayer' || category === 'Strategy' ? 'bg-accent' :
                          'bg-neutral-dark'
                        } text-white text-xs px-2 py-1 rounded font-ui`}
                      >
                        {category}
                      </span>
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
        
        <div className="text-center mt-10">
          <Link href="/games">
            <a className="font-ui text-sm border-2 border-neutral-dark px-6 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all inline-block">
              View All Games
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingGames;
