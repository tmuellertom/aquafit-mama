import React from "react";

const SubHeading = ({ as: Tag = "h3", children, className = "", ...props }) => (
  <Tag
    className={`font-lovelo uppercase font-bold text-xl mb-3 ${className}`}
    {...props}
  >
    {children}
  </Tag>
);

export default SubHeading;
