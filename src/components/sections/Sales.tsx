import { motion } from "motion/react";
import { ShoppingBag, Settings, History } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import data from "../../data/db.json";

export const Sales = () => {
  return (
    <section id="sales" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
              alt="AC Spares" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            <SectionHeading 
              title="Sales & Genuine Spares" 
              subtitle="We don't just fix ACs, we provide complete cooling solutions including new units and high-quality parts."
              centered={false}
            />
            <div className="space-y-8">
              {data.sales.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                    {i === 0 ? <ShoppingBag size={24} /> : i === 1 ? <Settings size={24} /> : <History size={24} />}
                  </div>
                  <div>
                    <h4 className="fs-20 mb-2">{item.title}</h4>
                    <p className="text-slate-500 fs-15">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button href={`tel:${data.businessInfo.phone}`} className="mt-10 px-12">Get a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
