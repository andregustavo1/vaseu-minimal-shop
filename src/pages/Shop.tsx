
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-[76px] pb-16">
        <div className="container mx-auto px-1">
          <div className="flex items-center justify-between px-3">
            <h1 className="text-sm md:text-4xl">SHOP</h1>

            <h1 className="text-sm md:text-4xl">ALL</h1>
          </div>

          <div className="grid grid-cols-2 gap-1 md:gap-8">
            {/* Product placeholders */}
            {Array.from({ length: 6 }).map((_, index) => (
              <Link to="/product" key={index} className="group">
                <div className="aspect-[4/5] bg-gray-100 mb-1 mt-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
                </div>
                <h3 className="text-sm">REFLEXO BLACK</h3>
                <p className="text-sm text-gray-800">R$ 139,00</p>
                <p className="text-xs text-gray-600">3x de R$ 49,90</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
