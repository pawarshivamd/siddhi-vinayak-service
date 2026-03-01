import { motion } from "motion/react";
import { SectionHeadingProps } from "../../interfaces/ui.interface";

export const SectionHeading = ({ title, subtitle, light = false, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`fs-36 mb-4 ${light ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`fs-18 max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/80" : "text-slate-600"}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        className={`h-1.5 bg-primary mt-6 rounded-full ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
};
