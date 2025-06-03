import React from "react";

// Universeller Button für Links und Aktionen
const Button = ({
  href,
  type = "button",
  children,
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-lovelo uppercase inline-block px-6 py-3 rounded-md font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
