/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Coffee, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronRight,
  ExternalLink
} from "lucide-react";

// --- Types ---
interface MenuItem {
  name: string;
  price: string;
  description: string;
  category: 'Coffee' | 'Tea' | 'Food' | 'Dessert';
}

// --- Constants ---
const MENU_ITEMS: MenuItem[] = [
  { name: "Lumière Signature Latte", price: "¥650", description: "Smooth espresso with house-made vanilla bean syrup and silky steamed milk.", category: 'Coffee' },
  { name: "Hand-Drip Single Origin", price: "¥580", description: "Rotating selection of seasonal beans, brewed with precision.", category: 'Coffee' },
  { name: "Cold Brew", price: "¥550", description: "12-hour slow-steeped coffee for a smooth, low-acid finish.", category: 'Coffee' },
  { name: "Matcha Ritual Latte", price: "¥680", description: "Ceremonial grade Uji matcha whisked with your choice of milk.", category: 'Tea' },
  { name: "Earl Grey Reserve", price: "¥550", description: "Premium black tea infused with natural bergamot oil.", category: 'Tea' },
  { name: "Avocado & Poached Egg Toast", price: "¥1,200", description: "Sourdough bread, smashed avocado, chili flakes, and a perfectly poached egg.", category: 'Food' },
  { name: "Seasonal Quiche", price: "¥950", description: "Flaky pastry with seasonal vegetables and Gruyère cheese.", category: 'Food' },
  { name: "Basque Burnt Cheesecake", price: "¥750", description: "Creamy, caramelized cheesecake with a hint of sea salt.", category: 'Dessert' },
  { name: "Warm Chocolate Brownie", price: "¥650", description: "Rich dark chocolate brownie served with vanilla bean gelato.", category: 'Dessert' },
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center">
          <Coffee className="text-white w-5 h-5" />
        </div>
        <span className="font-serif text-2xl font-bold tracking-tight">Lumière</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
        <a href="#home" className="hover:text-stone-900 transition-colors">Home</a>
        <a href="#menu" className="hover:text-stone-900 transition-colors">Menu</a>
        <a href="#location" className="hover:text-stone-900 transition-colors">Location</a>
        <button className="bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-all">
          Book a Table
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
        alt="Cafe Interior" 
        className="w-full h-full object-cover brightness-[0.7]"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="relative z-10 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-white/80 uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Crafted with Passion</span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-tight">
          Your Morning <br /> <span className="italic">Sanctuary</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#menu" className="w-full sm:w-auto bg-white text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-all flex items-center justify-center gap-2">
            View Menu <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#location" className="w-full sm:w-auto border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
            Find Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<'Coffee' | 'Tea' | 'Food' | 'Dessert'>('Coffee');
  const categories: ('Coffee' | 'Tea' | 'Food' | 'Dessert')[] = ['Coffee', 'Tea', 'Food', 'Dessert'];

  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            From ethically sourced beans to seasonal ingredients, everything we serve is chosen for its quality and story.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat 
                ? 'bg-stone-900 text-white shadow-lg' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <AnimatePresence mode="wait">
            {MENU_ITEMS.filter(item => item.category === activeCategory).map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group p-6 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold group-hover:text-stone-900">{item.name}</h3>
                  <span className="font-mono text-stone-900 font-semibold">{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section id="location" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="text-stone-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-stone-600">神奈川県厚木市戸室1-27-5</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <Clock className="text-stone-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Opening Hours</h4>
                  <p className="text-stone-600">Mon - Fri: 08:00 - 20:00</p>
                  <p className="text-stone-600">Sat - Sun: 09:00 - 21:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="text-stone-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Contact</h4>
                  <p className="text-stone-600">+81 46-123-4567</p>
                  <p className="text-stone-600">hello@cafelumiere.jp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop" 
              alt="Cafe Location" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
              <p className="text-sm font-medium text-stone-500 mb-1 uppercase tracking-wider">Find us on</p>
              <h3 className="text-xl font-bold mb-4">Google Maps</h3>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=神奈川県厚木市戸室1-27-5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-stone-800 transition-all"
              >
                Open in Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-stone-900 text-white py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Coffee className="text-stone-900 w-5 h-5" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">Lumière</span>
          </div>
          <p className="text-stone-400 max-w-sm mb-8">
            Creating moments of peace and connection through the art of coffee and community. Join us in our sanctuary.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-stone-400 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Reservations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-stone-400 text-sm mb-4">Subscribe for seasonal updates and events.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:border-white/30 transition-colors"
            />
            <button className="bg-white text-stone-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-stone-100 transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 text-stone-500 text-xs flex flex-col md:row justify-between gap-4">
        <p>© 2026 Cafe Lumière. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
