import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="mt-3 flex items-center justify-between mx-auto  h-12 max-w-4xl px-6 rounded-lg bg-primary  ">
      <div className="flex font-medium gap-6 ">
        <p className="text-red">Home</p>
        <p>Logout</p>
      </div>
    </div>
  );
}
