
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
}

const Cart = () => {
  // Mock cart items
  const cartItems: CartItem[] = [
    { id: 1, name: "Product Name 1", price: 299, quantity: 1, size: "M" },
    { id: 2, name: "Product Name 2", price: 349, quantity: 1, size: "L" },
  ];

  const subtotal: number = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping: number = 0; // Free shipping
  const total: number = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold mb-12 text-center">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="space-y-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row justify-between border-b border-gray-200 pb-6">
                    <div className="flex">
                      <div className="w-24 h-32 bg-gray-100 mr-6"></div>
                      <div>
                        <h3 className="font-medium mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-1">Size: {item.size}</p>
                        <p className="text-gray-800">R$ {item.price.toFixed(2)}</p>
                        
                        <div className="flex items-center mt-4">
                          <select 
                            defaultValue={item.quantity}
                            className="border border-gray-300 p-1 mr-4 focus:outline-none focus:ring-black focus:border-black"
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          
                          <button className="flex items-center text-gray-500 hover:text-black transition-colors">
                            <Trash2 size={18} />
                            <span className="ml-1 text-sm">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-gray-50 p-6">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `R$ ${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-medium">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full py-3 px-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-opacity-90 transition-colors">
                  Checkout
                </button>
                
                <div className="mt-6 text-center">
                  <Link to="/shop" className="text-sm text-black hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-8">Your cart is currently empty.</p>
            <Link 
              to="/shop" 
              className="inline-block py-3 px-8 bg-black text-white text-sm uppercase tracking-widest hover:bg-opacity-90 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Cart;
