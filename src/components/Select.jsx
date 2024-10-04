import React, { useId } from "react";
import { forwardRef } from "react";

const Select = forwardRef(function Select(
  // eslint-disable-next-line no-unused-vars, react/prop-types
  { options, 
    // eslint-disable-next-line react/prop-types
    label, 
    // eslint-disable-next-line react/prop-types
    className = "", 
    ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none
         focus:bg-gray-50 duration-200 border
          border-gray-200 w-full ${className}`}
      >
        {
          // eslint-disable-next-line react/prop-types
          options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        }
      </select>
    </div>
  );
});

export default Select;
