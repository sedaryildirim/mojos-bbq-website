import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import LocationCard from "./components/LocationCard";
import MenuSection from "./components/MenuSection";
import FoodGallery from "./components/FoodGallery";
import SectionLabel from "./components/SectionLabel";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import { LOCATIONS, MENU } from "./constants";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-dark selection:bg-matte-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <ScrollReveal direction="none">
          <Marquee />
        </ScrollReveal>
        
        {/* Menu Section */}
        <SectionLabel 
          mainText="THE MENU // WOOD FIRE & SMOKE" 
          subText="AUTHENTIC BBQ // CRAFTED WITH PASSION"
        />
        <section id="menu" className="border-slate-light grid grid-cols-1 border-b bg-slate-dark lg:grid-cols-2 xl:grid-cols-4 scroll-mt-24">
          {MENU.map((item, idx) => (
            <ScrollReveal 
              key={item.id} 
              delay={idx * 0.1} 
              direction={item.id === 'sunday-roast' ? 'down' : 'none'}
              className="h-full"
            >
              <MenuSection 
                id={item.id}
                number={item.number}
                title={item.title}
                watermark={item.watermark}
                subtitle={item.subtitle}
                sections={item.sections}
                isDark={idx % 2 !== 0 && idx !== MENU.length - 1}
                isAccent={item.id === 'sunday-roast'}
              />
            </ScrollReveal>
          ))}
        </section>
        
        <FoodGallery />

        {/* Locations Section */}
        <SectionLabel 
          mainText="WHERE WE ARE // FIND A MOJO'S" 
          subText="4 LOCATIONS // GULF OF THAILAND"
        />
        <section id="locations" className="grid grid-cols-1 bg-slate-dark md:grid-cols-2 xl:grid-cols-4 scroll-mt-24 border-b border-slate-light">
          {LOCATIONS.map((loc, idx) => (
            <ScrollReveal key={loc.id} delay={idx * 0.1} direction="up" className="h-full">
              <LocationCard {...loc} />
            </ScrollReveal>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

