import { Link } from 'wouter';
import { rewards } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';

const RewardsSection = () => {
  return (
    <section className="py-16 px-4 bg-neutral-dark text-white">
      <div className="container mx-auto">
        <h2 className="font-pixel text-xl text-center mb-6">EARN <span className="text-[#F59E0B]">REWARDS</span></h2>
        <p className="font-body text-lg text-center max-w-2xl mx-auto mb-12">Complete challenges and collect pixels to unlock exclusive content in our rewards shop!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.slice(0, 4).map((reward) => (
            <Card key={reward.id} className="bg-neutral-light/10 rounded-lg p-4 border border-accent/30 transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative mb-4">
                <img 
                  src={reward.image} 
                  alt={reward.title} 
                  className="w-full h-40 object-cover rounded" 
                />
                <div className="absolute top-0 right-0 bg-[#F59E0B] text-neutral-dark font-ui text-xs px-2 py-1 m-2 rounded">{reward.pixelCost} Pixels</div>
              </div>
              <CardContent className="p-0">
              <h3 className="font-ui text-xl text-orange-500 mb-1">{reward.title}</h3>

                <p className="font-body text-lg text-blue-300 mb-4">{reward.description}</p>

                <button className="w-full font-ui text-xs bg-[#F59E0B] text-neutral-dark px-3 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all">
                  Redeem Reward
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/rewards">
            <a className="font-ui text-sm border-2 border-[#F59E0B] text-[#F59E0B] px-6 py-2 rounded shadow-pixel hover:shadow-pixel-hover transition-all inline-block">
              View All Rewards
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
