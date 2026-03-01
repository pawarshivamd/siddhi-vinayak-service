import { motion } from "motion/react";
import { ButtonProps } from "../../interfaces/ui.interface";

export const Button = ({ children, onClick, href, variant = "primary", className = "" }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 fs-16 cursor-pointer";
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30",
    secondary: "bg-white text-primary hover:bg-slate-50 shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <button onClick={onClick}>{content}</button>;
};
