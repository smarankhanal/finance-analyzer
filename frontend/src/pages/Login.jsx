import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-auto mt-20 sm:mt-10  w-auto max-w-100 bg-white/20  rounded-lg p-3 h-auto   shadow-lg">
      <p className="text-center mb-4 text-text-body font-bold text-lg">Login</p>
      <div className="space-y-4">
        <Input
          label="Email/Username"
          placeholder="Enter the email or username"
        />
        <Input label="Password" placeholder="Enter the password" />
      </div>
      <div className="flex justify-center w-full">
        <Button text="Login" className="w-30 items btn-shadow" />
      </div>
      <div className="w-full text-center mt-4">
        <p>
          <span className="text-text-body">Don't have account?</span>{" "}
          <span
            className="text-gray-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register...
          </span>
        </p>
      </div>
    </div>
  );
}
