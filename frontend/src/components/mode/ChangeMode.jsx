import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../store/modeSlice";

export default function ChangeMode() {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  return (
    <div
      className=" flex items-center rounded-lg cursor-pointer"
      onClick={() => dispatch(changeMode())}
    >
      {mode === "light" ? (
        <MdDarkMode className="text-gray-300 text-2xl hover:scale-105" />
      ) : (
        <MdLightMode className="text-yellow-300 text-2xl hover:scale-105" />
      )}
    </div>
  );
}
