import { motion } from "motion/react";
import { PhoneCall, ClipboardCheck, Wrench, Snowflake, ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import data from "../../data/db.json";

export const Process = () => {
  return (
    <section id="how-it-works" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Working Process"
          subtitle="We follow a systematic approach to ensure your AC gets the best treatment possible."
          light
        />

        <div className="grid lg:grid-cols-4 gap-8 mt-16">
          {data.process.map((step, i) => {
            const IconComponent = i === 0 ? PhoneCall : i === 1 ? ClipboardCheck : i === 2 ? Wrench : Snowflake;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative"
              >
                {i < data.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-primary to-transparent z-0 -translate-x-10" />
                )}

                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-primary/50 group-hover:-translate-y-2">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <span className="fs-20 font-bold">0{step.step}</span>
                  </div>

                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                    <IconComponent size={32} />
                  </div>

                  <h3 className="fs-24 mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-white/60 fs-16 leading-relaxed">
                    {step.description}
                  </p>

                  <span className="absolute bottom-4 right-8 fs-52 font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                    {step.step}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap justify-center md:justify-between items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl">
            <span className="fs-18 text-white/80">Ready to experience our expert service?</span>
            <Button href={`tel:${data.businessInfo.phone}`} className="px-8">Book Visit Now</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
