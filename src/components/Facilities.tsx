import { Waves, Sparkles, Users, Dumbbell, Car, Wifi } from 'lucide-react';
import poolImage from '@/assets/pool.jpg';
import spaImage from '@/assets/spa.jpg';
import conferenceImage from '@/assets/conference.jpg';

const facilities = [
  {
    id: 1,
    name: 'Indoor Pool',
    description: 'Relax in our heated indoor pool with stunning marble surroundings.',
    icon: Waves,
    image: poolImage,
  },
  {
    id: 2,
    name: 'Luxury Spa',
    description: 'Rejuvenate with our signature treatments and wellness therapies.',
    icon: Sparkles,
    image: spaImage,
  },
  {
    id: 3,
    name: 'Conference Center',
    description: 'State-of-the-art meeting rooms for successful business events.',
    icon: Users,
    image: conferenceImage,
  },
];

const amenities = [
  { icon: Dumbbell, name: 'Fitness Center', description: '24/7 access' },
  { icon: Car, name: 'Valet Parking', description: 'Complimentary' },
  { icon: Wifi, name: 'High-Speed WiFi', description: 'Throughout hotel' },
];

const Facilities = () => {
  return (
    <section id="facilities" className="section-padding bg-secondary">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Hotel Amenities
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Facilities & <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our world-class facilities designed to enhance every aspect of your stay.
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility) => (
            <div key={facility.id} className="card-elegant group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a href="#contact" className="block text-center text-primary-foreground text-sm font-medium hover:text-accent transition-colors">
                    Learn More →
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center">
                    <facility.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {facility.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Amenities */}
        <div className="bg-card rounded-sm p-8 md:p-12">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Additional Amenities
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <amenity.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{amenity.name}</h4>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
