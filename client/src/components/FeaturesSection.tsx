import { Trophy, ChartLine, Users, Gem } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Trophy className="text-accent text-2xl" />,
      title: "Achievements",
      description: "Unlock pixel badges and show off your gaming skills!"
    },
    {
      icon: <ChartLine className="text-secondary text-2xl" />,
      title: "Track Progress",
      description: "See your gaming history and improve your scores!"
    },
    {
      icon: <Users className="text-primary text-2xl" />,
      title: "Community",
      description: "Connect with friends and challenge them to games!"
    },
    {
      icon: <Gem className="text-[#F59E0B] text-2xl" />,
      title: "Rewards Shop",
      description: "Earn pixels and redeem for exclusive game items!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-neutral-dark text-white">
      <div className="container mx-auto">
        <h2 className="font-pixel text-xl text-center mb-12">
          AWESOME <span className="text-primary">FEATURES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
  <div key={index} className="text-center border-4 border-orange-500 rounded-lg p-8">
    <div className="bg-neutral-light rounded-lg p-8 mx-auto w-24 h-24 flex items-center justify-center mb-6">
      {feature.icon}
    </div>
    <h3 className="font-ui text-2xl mb-4">{feature.title}</h3>
    <p className="font-body text-xl">{feature.description}</p>
  </div>
))}


        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
