import React from "react";

const Button = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line no-unused-vars, react/prop-types
  type = "button",
  // eslint-disable-next-line react/prop-types
  bgColor = "bg-blue-500",
  // eslint-disable-next-line react/prop-types
  textColor = "text-white",
  // eslint-disable-next-line react/prop-types
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}
    >
      {children}
    </button>
  );
};

export default Button;
