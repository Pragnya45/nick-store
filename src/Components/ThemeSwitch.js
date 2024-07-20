import { useTheme } from "./ThemeProvider";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";

export function ThemeSwitch() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="">
      {theme === "light" ? (
        <button
          className="shadow-lg rounded-full p-2"
          onClick={() => {
            toggleTheme("dark");
          }}
        >
          <IoMdMoon color="#00a3ff" size={25} className=" " />
        </button>
      ) : (
        <button
          onClick={() => {
            toggleTheme("light");
          }}
          className="shadow-lg rounded-full p-2"
        >
          <FiSun color="#00a3ff" size={25} />
        </button>
      )}{" "}
    </div>
  );
}
