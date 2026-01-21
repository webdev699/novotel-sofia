import { Clock, MapPin, Utensils } from 'lucide-react';
import restaurantImage from '@/assets/restaurant.jpg';
import barImage from '@/assets/bar.jpg';

const diningOptions = [
  {
    name: 'The Golden Fork',
    type: 'Fine Dining Restaurant',
    description:
      'Experience culinary excellence with our award-winning chefs. Savor exquisite Bulgarian and international cuisine crafted from the finest local ingredients.',
    hours: '7:00 AM - 11:00 PM',
    features: ['Bulgarian Cuisine', 'International Menu', 'Private Dining', 'Wine Cellar'],
    image: restaurantImage,
  },
  {
    name: 'The Velvet Lounge',
    type: 'Cocktail Bar & Lounge',
    description:
      'Unwind in our sophisticated bar with handcrafted cocktails, premium spirits, and an extensive wine selection in an intimate atmosphere.',
    hours: '5:00 PM - 2:00 AM',
    features: ['Craft Cocktails', 'Live Jazz', 'Premium Whisky', 'Tapas Menu'],
    image: barImage,
  },
];

const Dining = () => {
  return (
    <section id="dining" className="section-padding bg-primary">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Culinary Experiences
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
            Restaurant & <span className="text-accent">Dining</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Embark on a gastronomic journey through our exceptional dining venues, 
            where every meal becomes a memorable experience.
          </p>
        </div>

        {/* Dining Options */}
        <div className="space-y-16">
          {diningOptions.map((venue, index) => (
            <div
              key={venue.name}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/10] overflow-hidden rounded-sm">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-medium">{venue.type}</span>
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
                  {venue.name}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  {venue.description}
                </p>

                {/* Hours */}
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-primary-foreground/80">{venue.hours}</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {venue.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-sm border border-primary-foreground/30 text-primary-foreground px-4 py-2 rounded-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-block btn-gold"
                >
                  Reserve a Table
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dining;
