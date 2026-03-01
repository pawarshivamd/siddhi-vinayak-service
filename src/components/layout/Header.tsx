import { motion } from "motion/react";
import { AirVent, Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import data from "../../data/db.json";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Services", "How it Works", "Packages", "Sales", "FAQ"];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <AirVent className="text-white w-6 h-6" />
          </div>
          <span className={`font-display font-extrabold fs-20 ${isScrolled ? "text-slate-900" : "text-white"}`}>
            SIDDHI VINAYAK
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`fs-14 font-medium hover:text-primary transition-colors ${isScrolled ? "text-slate-600" : "text-white/90"}`}
            >
              {item}
            </a>
          ))}
          <Button href={`tel:${data.businessInfo.phone}`} className="flex gap-2">
            <Phone size={18} />
            {data.businessInfo.phone}
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsMenuOpen(false)}
              className="fs-18 font-medium text-slate-600 hover:text-primary"
            >
              {item}
            </a>
          ))}
          <Button href={`tel:${data.businessInfo.phone}`} className="w-full">
            Call Now: {data.businessInfo.phone}
          </Button>
        </motion.div>
      )}
    </header>
  );
};
