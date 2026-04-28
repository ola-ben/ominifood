import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import FeaturedIn from "./components/FeaturedIn.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Meals from "./components/Meals.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import Features from "./components/Features.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
