import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import data from "../../data/db.json";

export const Packages = () => {
  return (
    <section id="packages" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeading
          title="Service Packages (AMC)"
          subtitle="Choose a plan that fits your needs and enjoy a hassle-free cooling experience all year round."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-10 shadow-sm border-2 flex flex-col ${pkg.popular ? "border-primary" : "border-transparent"}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full fs-12 font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="fs-24 mb-2">{pkg.name}</h3>
              <div className="mb-8">
                <span className="fs-42 font-bold text-slate-900">₹{pkg.price}</span>
                <span className="text-slate-400 fs-16 ml-2">/ year</span>
              </div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 fs-15">
                    <CheckCircle2 className="text-green-500" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">

                <Button
                  href={`tel:${data.businessInfo.phone}`}
                  variant={pkg.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Choose Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
