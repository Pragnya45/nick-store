import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { ThemeSwitch } from "../ThemeSwitch";
import { uiState } from "../../Redux/uiSlice";
import { useSelector } from "react-redux";
import nikeBlack from "../../assets/images/nike-black.png";
import nikeWhite from "../../assets/images/nike-white.png";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import menu from "../../assets/icons/menu.svg";
import { IoMenu } from "react-icons/io5";

export default function Header({ setShowSidebar }) {
  const { theme } = useSelector(uiState);
  const location = useLocation();
  const [showPageNav, setShowPageNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = currentScrollPos > 70;
      setShowPageNav(isVisible);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <nav
      className={` ${
        showPageNav ? `bg-color-${theme}` : "bg-user-card"
      }  fixed z-10 left-0 right-0 top-0`}
    >
      <div className="border-b border-[#CCCCCC] flex h-20 w-full items-center justify-between px-4 sm:px-12 text-white lg:gap-4  xl:gap-14">
        <Link
          to="/"
          className="flex cursor-pointer items-center justify-center gap-3 "
        >
          {theme === "dark" ? (
            <img
              alt="logo"
              src={nikeWhite}
              className="w-[6rem] sm:w-[8rem] h-[3rem]"
            />
          ) : (
            <img
              alt="logo"
              src={nikeBlack}
              className="w-[6rem] sm:w-[8rem] h-[4rem]"
            />
          )}
        </Link>
        <div
          className={`w-fit hidden sm:flex gap-4 items-center font-semibold text-[16px] text-color-${theme} gap-7  tracking-wide`}
        >
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
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex w-[200px] h-[30px] bg-[#EAE6E65E] items-center gap-1 px-3 rounded-full">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full h-[25px] bg-transparent text-sm outline-none"
            />
            <IoSearch size={20} color={theme === "dark" ? "white" : "black"} />
          </div>
          <div className="hidden sm:block">
            <PiShoppingCartFill
              size={20}
              color={theme === "dark" ? "white" : "black"}
            />
          </div>
          <button
            className="cursor-pointer w-8 h-8 block sm:hidden"
            onClick={() => setShowSidebar(true)}
          >
            {/* <img alt="menu" src={menu} width={40} height={40} /> */}
            <IoMenu size={28} color="#00a3ff" />
          </button>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
