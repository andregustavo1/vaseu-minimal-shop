
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeroProps {
  imageUrl: string;
}

const Hero: FC<HeroProps> = ({ imageUrl }) => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-20 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <h1
            className="text-white text-3xl md:text-7xl font-bold tracking-wider mb-4"
            style={{
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            DROP `1LUMINATE
          </h1>

          <Link
            to="/shop"
          >
            <button className="mb-20 px-14 py-4 bg-transparent border-white border-2 rounded-[0.1rem] text-white text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-black duration-300 transition-all" >
              Shop Now
            </button>
          </Link>


        </div>
      </div>
    </div>
  );
};

export default Hero;
