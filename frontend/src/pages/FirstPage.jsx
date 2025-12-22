import React from "react";
import { Button } from "../components";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen m-4 text-text-body flex flex-col items-center justify-center ">
      <div className="h-20 w-20 rounded-full bg-black flex items-center justify-center mb-6 hover:scale-110 transition ease-in-out cursor-pointer">
        <Logo />
      </div>

      <div className=" max-w-xl space-y-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-title">
          Track Your Money. Take Control.
        </h1>
        <p className="text-xl">
          Easily record your income and expenses, understand your spending
          habits, and stay in control of your personal finances—all in one
          simple dashboard.
        </p>
      </div>
      <Button
        text="Login"
        className="mt-10 btn-shadow"
        onClick={() => {
          navigate("/login");
        }}
      />
    </div>
  );
}
