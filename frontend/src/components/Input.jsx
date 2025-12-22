import React from "react";

export default function Input({
  label,
  type = "text",
  placeholder = "Enter the text",
  className = "",
  error,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-text-muted mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className={`
         w-full border px-2 py-2 mb-3 bg-card rounded-lg border-border text-text-body focus:outline-none focus:ring-2 focus:ring-primary ${
           error ? "border-red-500 focus:ring-red-500 bg-red-400" : ""
         }
          ${className} `}
      />
      {error && <p className=" text-red-500 pl-2">{error}</p>}
    </div>
  );
}
