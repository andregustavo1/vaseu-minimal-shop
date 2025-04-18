
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Shop All</h1>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {/* Product placeholders */}
            {Array.from({ length: 6 }).map((_, index) => (
              <Link to="/product" key={index} className="group">
                <div className="aspect-[4/5] bg-gray-100 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
                </div>
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-700 mt-1">R$ 299,00</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
