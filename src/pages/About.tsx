
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">About VASEU</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="aspect-square bg-gray-100 w-full"></div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              VASEU was founded with a simple yet powerful vision: create minimalist clothing that stands the test of time. 
              In a world of fast fashion and fleeting trends, we believe in the enduring power of thoughtful design and quality craftsmanship.
            </p>
            <p className="text-gray-700">
              Each piece in our collection is designed with intention, using premium materials that have been carefully selected for their quality, durability, and minimal environmental impact.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="md:order-2">
            <div className="aspect-square bg-gray-100 w-full"></div>
          </div>
          <div className="md:order-1">
            <h2 className="text-2xl font-semibold mb-6">Our Philosophy</h2>
            <p className="text-gray-700 mb-4">
              We believe that style shouldn't come at the expense of substance. That's why every VASEU piece is designed with both aesthetic and function in mind.
            </p>
            <p className="text-gray-700">
              Our commitment to minimalism extends beyond our designs to our entire business model. We produce in small batches to reduce waste and ensure quality control. We focus on classic styles that transcend seasonal trends.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
