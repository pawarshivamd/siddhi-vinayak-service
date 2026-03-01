import { motion } from "motion/react";
import { BadgeCheck, Star, Phone } from "lucide-react";
import { Button } from "../ui/Button";
import data from "../../data/db.json";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599939571322-792a326991f2?auto=format&fit=crop&q=80&w=2000"
          alt="AC Service"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-3 lg:mb-6 border border-primary/30">
            <BadgeCheck size={18} />
            <span className="fs-14 font-bold uppercase tracking-wider">Verified AC Experts</span>
          </div>
          <h1 className="fs-52 text-white leading-tight mb-3 lg:mb-6">
            {data.businessInfo.tagline}
          </h1>
          <p className="fs-20 text-white/80 mb-6 lg:mb-10 leading-relaxed">
            Expert AC repair, installation, and maintenance in {data.businessInfo.location}.
            Trusted by 10,000+ happy customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#services" className="px-10 py-4">Explore Services</Button>
            <Button href={`tel:${data.businessInfo.phone}`} variant="secondary" className="px-10 py-4 flex gap-2">
              <Phone size={20} />
              Book Now
            </Button>
          </div>

          <div className="mt-6 lg:mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  className="w-12 h-12 rounded-full border-2 border-slate-900"
                  alt="User"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-white/60 fs-14">4.8/5 Rating (2,500+ Reviews)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
