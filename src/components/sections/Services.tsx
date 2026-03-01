import { motion } from "motion/react";
import { AirVent, Wrench, ShieldCheck, History, Clock } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import data from "../../data/db.json";

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeading
          title="Our Premium Services"
          subtitle="Professional AC solutions tailored to your needs. Best prices in Ahmedabad guaranteed."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col "
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {i === 0 ? <AirVent size={28} /> : i === 1 ? <Wrench size={28} /> : i === 2 ? <ShieldCheck size={28} /> : <History size={28} />}
              </div>
              <h3 className="fs-20 mb-3">{service.name}</h3>
              <p className="text-slate-500 fs-14 mb-6 line-clamp-2">{service.description}</p>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="fs-24 font-bold text-primary">₹{service.price}</span>
                  <span className="fs-14 text-slate-400 line-through ml-2">₹{service.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400 fs-12">
                  <Clock size={14} />
                  {service.duration}
                </div>
              </div>
              <div className="mt-auto">
                <Button href={`tel:${data.businessInfo.phone}`} variant="outline" className="w-full">Book Now</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
