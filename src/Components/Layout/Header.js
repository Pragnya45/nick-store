import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { ThemeSwitch } from "../ThemeSwitch";

const logo = "/favicon.ico";

export default function Header() {
  return (
    <nav className="fixed left-0 top-0 flex h-20 w-full items-center justify-center px-4 text-white lg:gap-4  xl:gap-14">
      <section className="flex items-center justify-center gap-3 ">
        <image
          alt="logo"
          src={logo}
          width={80}
          height={80}
          className="object-contain"
        />
        <p className="hidden text-2xl  font-light tracking-wide lg:block">
          Quill Audits
        </p>
      </section>
      <div className="hidden items-center  gap-7 text-sm font-light tracking-wide lg:flex">
        <Link className="flex items-center gap-1" href="/">
          Services <IoIosArrowDown />{" "}
        </Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Our Audits</Link>
        <Link className="flex items-center gap-1" to="/">
          Tools <IoIosArrowDown />{" "}
        </Link>
        <Link className="flex items-center gap-1" to="/">
          Resources <IoIosArrowDown />{" "}
        </Link>
        <Link to="/">Refer Earn Secure</Link>
      </div>
      <button className="mx-auto flex h-10   items-center justify-center rounded-md bg-btn-gradient p-2 text-sm  lg:mx-0">
        DAPP
      </button>
      <ThemeSwitch />
    </nav>
  );
}
