import { FC } from "react";

interface HeroProps {
  imageUrl: string;
}

const Hero: FC<HeroProps> = ({ imageUrl }) => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-wider mb-4">VASEU</h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-lg mx-auto tracking-wide">
            Minimal design. Premium quality.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-opacity-90 transition-all">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
