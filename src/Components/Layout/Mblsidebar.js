import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import menu from "../../assets/icons/menu.svg";
import { ThemeSwitch } from "../ThemeSwitch";

export default function Mblsidebar({ setShowSidebar }) {
  const location = useLocation();

  return (
    <nav className="relative overflow-hidden block sm:hidden cursor-default top-0 left-0 w-full h-full z-20 transition ease-in-out delay-150">
      <div className="h-[100vh] flex flex-col items-start justify-start gap-4 w-full fixed top-0 left-0 bg-[#1B1919] p-6">
        <div className="flex w-full items-center justify-between  pt-2 pr-2">
          <button
            className="cursor-pointer w-7 h-7 block"
            onClick={() => setShowSidebar(false)}
          >
            <img alt="menu" src={arrow} width={40} height={40} />
          </button>
          <div className="flex gap-6">
            <button
              className="cursor-pointer w-8 h-8 block sm:hidden"
              onClick={() => setShowSidebar(true)}
            >
              <img alt="menu" src={menu} width={40} height={40} />
            </button>
            <ThemeSwitch />
          </div>
        </div>
        <div className="flex flex-col items-start pl-2 mt-4 gap-6">
          <Link
            className={`${
              location.pathname === "/" ? "border-b-2 border-[#00a3ff] " : ""
            } hover:border-b-2 hover:border-[#00a3ff]  `}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${
              location.pathname === "/shop"
                ? "border-b-2 border-[#00a3ff] "
                : ""
            } hover:border-b-2 hover:border-[#00a3ff]  `}
            to="/shop"
          >
            Shop
          </Link>
          <Link
            to="/features"
            className={`${
              location.pathname === "/features"
                ? "border-b-2 border-[#00a3ff]"
                : ""
            } hover:border-b-2 hover:border-[#00a3ff]  `}
          >
            Features
          </Link>
          <Link
            to="/contact-us"
            className={`${
              location.pathname === "/contact-us"
                ? "border-b-2 border-[#00a3ff] "
                : ""
            } hover:border-b-2 hover:border-[#00a3ff]  `}
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
}
