
import { useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  
  const sizes = ["XS", "S", "M", "L", "XL"];
  const images = Array(3).fill(null); // Placeholder for 3 images

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <Link to="/shop" className="text-gray-600 hover:text-black text-sm flex items-center">
              <ChevronLeft size={16} />
              <span>Back to Shop</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-100 relative">
                {images.length > 1 && (
                  <>
                    <button 
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10"
                      onClick={prevImage}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10"
                      onClick={nextImage}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex mt-4 space-x-2">
                  {images.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-16 h-20 bg-gray-100 ${currentImage === index ? 'ring-2 ring-black' : ''}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-semibold mb-2">Classic Minimal Tee</h1>
              <p className="text-xl mb-6">R$ 199,00</p>
              
              <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">Description</h2>
                <p className="text-gray-600">
                  Our signature classic tee made from premium organic cotton. Features a relaxed fit with minimal design details.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">Size</h2>
                <div className="flex space-x-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 flex items-center justify-center border ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-900"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">Quantity</h2>
                <div className="flex border border-gray-300 w-fit">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border-r border-gray-300"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-10 h-10 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center border-l border-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="py-3 px-6 bg-black text-white text-sm uppercase tracking-widest hover:bg-opacity-90 transition-colors flex-1">
                  Add to Cart
                </button>
                <button className="py-3 px-4 border border-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-medium mb-1">Material</h3>
                    <p className="text-gray-600">100% Organic Cotton</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Care</h3>
                    <p className="text-gray-600">Machine wash cold with similar colors. Tumble dry low.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
