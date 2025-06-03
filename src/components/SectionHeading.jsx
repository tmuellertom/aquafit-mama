import React from "react";

const SectionHeading = ({ children, className = "", ...props }) => (
  <h2
    className={`text-3xl md:text-4xl font-bold mb-3 font-shrikhand ${className}`}
    {...props}
  >
    {children}
  </h2>
);

export default SectionHeading;
