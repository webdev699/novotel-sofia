import { Wifi, Coffee, Tv, Bath, Users, Maximize } from 'lucide-react';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomSuite from '@/assets/room-suite.jpg';
import roomPresidential from '@/assets/room-presidential.jpg';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Elegant comfort with city views, perfect for business or leisure travelers.',
    image: roomDeluxe,
    price: '€180',
    size: '35 m²',
    guests: 2,
    amenities: ['King Bed', 'City View', 'Mini Bar', 'Work Desk'],
  },
  {
    id: 2,
    name: 'Executive Suite',
    description: 'Spacious living area with separate bedroom and premium amenities.',
    image: roomSuite,
    price: '€320',
    size: '65 m²',
    guests: 3,
    amenities: ['Living Room', 'Panoramic View', 'Jacuzzi', 'Butler Service'],
  },
  {
    id: 3,
    name: 'Presidential Suite',
    description: 'The pinnacle of luxury with unparalleled space and exclusive services.',
    image: roomPresidential,
    price: '€550',
    size: '120 m²',
    guests: 4,
    amenities: ['Grand Living', 'Private Terrace', 'Dining Room', '24/7 Butler'],
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Accommodations
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Rooms & <span className="text-accent">Suites</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each room is a sanctuary of comfort, designed with meticulous attention to detail 
            and equipped with the finest amenities for your perfect stay.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="card-elegant group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent px-4 py-2 rounded-sm">
                  <span className="font-heading text-lg font-semibold text-accent-foreground">
                    {room.price}
                  </span>
                  <span className="text-accent-foreground/80 text-sm">/night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {room.description}
                </p>

                {/* Room Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.guests} Guests</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs bg-secondary px-3 py-1 rounded-sm text-secondary-foreground"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Wifi className="w-5 h-5 text-accent" />
                  <Coffee className="w-5 h-5 text-accent" />
                  <Tv className="w-5 h-5 text-accent" />
                  <Bath className="w-5 h-5 text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            View All Rooms
          </a>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
