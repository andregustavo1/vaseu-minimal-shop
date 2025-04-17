
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero imageUrl="/img/hero.png" />
      <Footer />
    </div>
  );
};

export default Index;
