import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import "./App.css";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
