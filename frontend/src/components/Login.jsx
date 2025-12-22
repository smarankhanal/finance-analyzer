import React from "react";
import Input from "./Input";
import Button from "./Button";
export default function Login() {
  return (
    <div className="flex flex-col mx-auto mt-20 sm:mt-10  w-auto max-w-[400px] bg-white/20  rounded-lg p-3 h-auto   shadow-lg">
      <p className="text-center mb-4 text-text-body font-bold text-lg">LogIn</p>
      <div className="space-y-4">
        <Input label="Email/Username" />
        <Input label="Password" />
      </div>
      <div className="flex justify-center w-full">
        <Button text="Login" className="w-30 items btn-shadow" />
      </div>
    </div>
  );
}
