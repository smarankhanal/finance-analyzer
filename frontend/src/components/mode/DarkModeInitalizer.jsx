import { useEffect } from "react";
import { useSelector } from "react-redux";
const DarkModeInitalizer = () => {
  const mode = useSelector((state) => state.mode.mode);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(mode);
  }, [mode]);
  return null;
};
export default DarkModeInitalizer;
