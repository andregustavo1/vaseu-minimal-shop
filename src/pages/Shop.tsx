
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const PRODUCTS = [
  {
    id: 1,
    name: "FLORESCER | TEE STONE WASHED BLACK",
    price: "ESGOTADO",
    sizes: [],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "NOIRO TEE WASHED BROWN",
    price: "R$ 299.00",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "NOIRO TEE OFF WHITE",
    price: "R$ 299.00",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "CAMP CUT SHIRT BROWN",
    price: "R$ 449.00",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    image: "/placeholder.svg"
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <button className="text-sm font-medium">ALL</button>
            <button className="text-sm font-medium flex items-center gap-2">
              FILTRAR
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M6 12h12m-9 6h6"/>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <Link to="/product" key={product.id} className="group">
                <div className="aspect-[4/5] bg-gray-100 mb-4">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm">{product.price}</p>
                  {product.sizes.length > 0 && (
                    <div className="flex gap-1 flex-wrap">
                      {product.sizes.map((size) => (
                        <span key={size} className="text-xs">{size}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
