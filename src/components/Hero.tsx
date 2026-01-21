import heroImage from '@/assets/hero-hotel.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-up opacity-0 delay-100">
          Welcome to
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 animate-fade-up opacity-0 delay-200">
          Novotel Sofia
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 delay-300">
          Experience unparalleled luxury in the heart of Bulgaria's capital. 
          Where timeless elegance meets modern sophistication.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-400">
          <a href="#rooms" className="btn-gold">
            Explore Rooms
          </a>
          <a href="#contact" className="btn-outline">
            Book Your Stay
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
