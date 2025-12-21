import React from "react";
import Logo from "./Logo";

import { useSelector } from "react-redux";
import ChangeMode from "./mode/ChangeMode";

export default function Navbar() {
  const mode = useSelector((state) => state.mode.mode);
  return (
    <div className=" sticky top-5 flex items-center justify-between mx-auto  h-12 max-w-4xl p-2 rounded-lg bg-secondary text-text">
      <div>
        <Logo />
      </div>
      <div className="flex font-medium gap-6 ">
        <a href="/" className="anchor">
          Home
        </a>
        <a href="/" className="anchor">
          Logout
        </a>
        <ChangeMode />
      </div>
    </div>
  );
}
