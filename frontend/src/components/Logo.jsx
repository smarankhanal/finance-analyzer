import React from "react";

export default function Logo({ className = "", ...props }) {
  return (
    <div className="h-25 w-25">
      <img
        src="../public/images/logo.png"
        className={`rounded-full object-cover  ${className}`}
        {...props}
      />
    </div>
  );
}
