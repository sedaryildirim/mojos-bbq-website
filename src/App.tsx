import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import LocationCard from "./components/LocationCard";
import MenuSection from "./components/MenuSection";
import PitFeed from "./components/PitFeed";
import Footer from "./components/Footer";
import { LOCATIONS, MENU } from "./constants";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-dark selection:bg-matte-orange selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        
        {/* Locations Section */}
        <section id="locations" className="grid grid-cols-1 bg-slate-dark md:grid-cols-2 xl:grid-cols-4">
          {LOCATIONS.map((loc) => (
            <LocationCard key={loc.id} {...loc} />
          ))}
        </section>

        {/* Menu Section */}
        <section id="menu" className="border-slate-light grid grid-cols-1 border-b bg-slate-dark lg:grid-cols-3">
          {MENU.map((item, idx) => (
            <MenuSection 
              key={item.id} 
              id={item.id}
              number={item.number}
              title={item.title}
              subtitle={item.subtitle}
              sections={item.sections}
              isDark={idx === 1}
            />
          ))}
        </section>

        <PitFeed />
      </main>

      <Footer />
    </div>
  );
}

