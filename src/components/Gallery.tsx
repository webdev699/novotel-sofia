import { useState } from 'react';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-hotel.jpg';
import lobbyImage from '@/assets/lobby.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomSuite from '@/assets/room-suite.jpg';
import roomPresidential from '@/assets/room-presidential.jpg';
import restaurantImage from '@/assets/restaurant.jpg';
import poolImage from '@/assets/pool.jpg';
import spaImage from '@/assets/spa.jpg';
import barImage from '@/assets/bar.jpg';
import conferenceImage from '@/assets/conference.jpg';

const images = [
  { src: heroImage, alt: 'Hotel Exterior', category: 'Exterior' },
  { src: lobbyImage, alt: 'Grand Lobby', category: 'Lobby' },
  { src: roomDeluxe, alt: 'Deluxe Room', category: 'Rooms' },
  { src: roomSuite, alt: 'Executive Suite', category: 'Rooms' },
  { src: roomPresidential, alt: 'Presidential Suite', category: 'Rooms' },
  { src: restaurantImage, alt: 'Fine Dining Restaurant', category: 'Dining' },
  { src: poolImage, alt: 'Indoor Swimming Pool', category: 'Facilities' },
  { src: spaImage, alt: 'Luxury Spa', category: 'Facilities' },
  { src: barImage, alt: 'Cocktail Bar', category: 'Dining' },
  { src: conferenceImage, alt: 'Conference Room', category: 'Facilities' },
];

const categories = ['All', 'Exterior', 'Lobby', 'Rooms', 'Dining', 'Facilities'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Visual Journey
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Photo <span className="text-accent">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of our stunning hotel and discover the elegance that awaits you.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-sm ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setLightboxImage(image.src)}
              className={`relative overflow-hidden rounded-sm cursor-pointer group ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`aspect-square ${index === 0 || index === 5 ? 'md:aspect-auto md:h-full' : ''}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-primary-foreground font-heading text-lg font-semibold">
                    {image.alt}
                  </p>
                  <p className="text-accent text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightboxImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
