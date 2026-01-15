import React from "react";

const SectionWrap = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "py-12 md:py-16",
    dense: "py-10 md:py-12",
    compact: "py-8 md:py-10",
  };

  return (
    <section className={`w-full ${variants[variant]} ${className}`}>
      <div className="container mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
};

export default SectionWrap;
