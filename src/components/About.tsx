import { Star, Award, Clock, Users } from 'lucide-react';
import lobbyImage from '@/assets/lobby.jpg';

const features = [
  {
    icon: Star,
    title: '5-Star Luxury',
    description: 'Award-winning hospitality and world-class amenities',
  },
  {
    icon: Award,
    title: 'Prime Location',
    description: 'Steps away from Sofia\'s iconic landmarks and attractions',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Round-the-clock concierge and room service',
  },
  {
    icon: Users,
    title: 'Expert Staff',
    description: 'Dedicated team committed to your comfort',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={lobbyImage}
                alt="Novotel Sofia Lobby"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-accent rounded-sm -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
              About Our Hotel
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              A Legacy of <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled in the vibrant heart of Sofia, Novotel Sofia stands as a beacon of luxury 
              and refined hospitality. Our hotel seamlessly blends contemporary design with 
              timeless elegance, creating an atmosphere of sophisticated comfort.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              From our meticulously appointed rooms to our world-class dining experiences, 
              every detail has been carefully curated to exceed your expectations. Whether 
              you're visiting for business or leisure, our dedicated team ensures an 
              unforgettable stay.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
