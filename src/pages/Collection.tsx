
import Header from "@/components/Header";

const Collection = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="aspect-[3/4] bg-gray-100 relative group overflow-hidden">
            <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h3 className="text-white text-xl font-medium mb-2">Summer 2025</h3>
                <button className="bg-white text-black px-4 py-2 text-sm uppercase tracking-wider">
                  View Collection
                </button>
              </div>
            </div>
          </div>
          <div className="aspect-[3/4] bg-gray-100 relative group overflow-hidden">
            <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h3 className="text-white text-xl font-medium mb-2">Essentials</h3>
                <button className="bg-white text-black px-4 py-2 text-sm uppercase tracking-wider">
                  View Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-8">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Summer 2025", "Winter 2024", "Essentials", "Limited Edition", "Collaborations", "Accessories"].map((collection, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:border-black transition-colors">
                <h3 className="text-lg font-medium mb-4">{collection}</h3>
                <button className="text-sm text-black hover:underline uppercase tracking-wider">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Collection;
