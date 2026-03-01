import { motion } from "motion/react";
import { SectionHeading } from "../ui/SectionHeading";
import data from "../../data/db.json";

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="space-y-4">
          {data.faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-slate-100 rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <h4 className="fs-18 mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0 fs-14 font-bold">?</span>
                {faq.question}
              </h4>
              <p className="text-slate-500 fs-15 pl-11">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
