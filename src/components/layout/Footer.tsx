import { AirVent, Phone, BadgeCheck, Clock } from "lucide-react";
import { Button } from "../ui/Button";
import data from "../../data/db.json";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <AirVent className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-extrabold fs-24">SIDDHI VINAYAK</span>
            </div>
            <p className="text-white/60 fs-16 max-w-md mb-8">
              Providing best-in-class AC repair, installation, and maintenance services at your doorsteps in Ahmedabad & Gandhinagar.
            </p>
            <div className="flex gap-4">
              <Button href={`tel:${data.businessInfo.phone}`} className="px-6">Call Now</Button>
            </div>
          </div>
          
          <div>
            <h5 className="fs-18 mb-6 uppercase tracking-widest text-primary">Quick Links</h5>
            <ul className="space-y-4 text-white/60 fs-15">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">AMC Packages</a></li>
              <li><a href="#sales" className="hover:text-white transition-colors">Sales & Spares</a></li>
            </ul>
          </div>

          <div>
            <h5 className="fs-18 mb-6 uppercase tracking-widest text-primary">Contact Info</h5>
            <ul className="space-y-4 text-white/60 fs-15">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-1" />
                <span>{data.businessInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <BadgeCheck size={18} className="text-primary shrink-0 mt-1" />
                <span>{data.businessInfo.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary shrink-0 mt-1" />
                <span>Available 24/7 for Emergencies</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 fs-14">
            © {new Date().getFullYear()} Siddhi Vinayak Services. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/40 fs-14">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
