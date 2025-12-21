import React from "react";

export default function Button({ text = "Button", className = "", ...props }) {
  return (
    <button
      className={`bg-blue-700 transition duration-300 ease-in-out font-bold cursor-pointer hover:opacity-80 text-white px-4 py-2 rounded ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
