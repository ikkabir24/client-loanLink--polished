import React from "react";

const SectionWrap = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "pb-12 md:pb-16",
    dense: "pb-10 md:pb-12",
    compact: "pb-8 md:pb-10",
  };

  return (
    <section className={`w-full ${variants[variant]} ${className}`}>
      <div className="container mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
};

export default SectionWrap;
