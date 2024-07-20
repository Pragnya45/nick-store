import footerBg from "../../assets/images/footerBg.svg";
import nikeBlack from "../../assets/images/nike-black.png";
import nikeWhite from "../../assets/images/nike-white.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { uiState } from "../../Redux/uiSlice";
import instagram from "../../assets/icons/instagram.png";
import telegram from "../../assets/icons/telegram.png";
import twitter from "../../assets/icons/twitter.svg";

export default function Footer() {
  const { theme } = useSelector(uiState);
  const Footerdata = [
    {
      title: "SIGHTMAP",
      options: [
        {
          option: "Home",
          link: "/",
        },
        {
          option: "Shop",
          link: "/shop",
        },
        {
          option: "Features",
          link: "/features",
        },
        {
          option: "Contact us",
          link: "/contact-us",
        },
      ],
    },

    {
      title: "OUR POLICIES",
      options: [
        {
          option: "Terms and conditions",
          link: "/",
        },
        {
          option: "Privacy policy",
          link: "/",
        },
      ],
    },
  ];

  return (
    <footer
      className="flex h-[70vh] w-full flex-col items-center bg-user-card bg-cover bg-center  py-6 text-white"
      style={{ backgroundImage: theme === "dark" ? `url(${footerBg})` : null }}
    >
      <div className="flex flex-col sm:flex-row my-6 w-full pb-8 sm:pb-[4rem]  px-12 pt-6 gap-10  justify-between">
        <div className="flex flex-col gap-6 items-start">
          {theme === "dark" ? (
            <img alt="logo" src={nikeWhite} className="w-[8rem] h-[3rem]" />
          ) : (
            <img alt="logo" src={nikeBlack} className="w-[8rem] h-[4rem]" />
          )}
        </div>
        <div className="items-start flex flex-col sm:ml-0 sm:flex-row xl:gap-[10rem] sm:gap-[4rem] gap-x-2 gap-y-4">
          {Footerdata?.map((option, index) => (
            <div className="flex sm:items-start gap-3 flex-col" key={index}>
              <p
                className={`text-section-${theme} uppercase font-poppins font-semibold text-[16px] sm:text-[18px]`}
              >
                {option?.title}
              </p>
              <div className="flex flex-col mt-2 gap-4">
                {option?.options?.map((option, index) => (
                  <Link
                    to={option?.link}
                    className={`text-color-${theme} font-manrope my-1 sm:my-0 font-semibold text-[16px]`}
                    key={index}
                    target={option?.option === "Whitepaper" ? "_blank" : ""}
                  >
                    {option.option}{" "}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 items-start sm:items-end">
          <div className="flex items-start  flex-col">
            <p
              className={`text-section-${theme} uppercase font-poppins  sm:text-left font-semibold text-[18px]`}
            >
              Contact Us
            </p>
            <p
              className={`text-color-${theme} mt-4 font-poppins sm:text-left font-normal text-[16px]`}
            >
              Nike@plus.com
              <br />
              Nike Fashions Pvt. Ltd. G-1k2,
              <br />
              Old No 87/88, Village Guju, Near MCD School,
              <br />
              Delhi-140096
              <br />
              Tel. +91 72-877-31576
              <br />
              Hours: Mon to Sat from 10 AM to 6 PM
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start sm:items-end">
          <div className="flex items-start sm:items-end flex-col">
            <p
              className={`text-section-${theme} uppercase font-poppins  sm:text-right font-semibold text-[18px]`}
            >
              Follow Us
            </p>
            <div className="flex gap-2 z-[3] mt-[1rem] justify-center items-center">
              <Link
                className="cursor-pointer"
                to="https://web.telegram.org/"
                target="_blank"
              >
                <img
                  src={telegram}
                  alt="socialIcon"
                  width={50}
                  height={50}
                  className="object-fill w-10 h-10"
                  // className='w-12'
                />
              </Link>
              <Link
                className="cursor-pointer"
                to="https://www.instagram.com/"
                target="_blank"
              >
                <img
                  src={instagram}
                  alt="socialIcon"
                  width={55}
                  height={55}
                  className="object-fill w-12 h-12"
                />
              </Link>
              <Link
                className="cursor-pointer"
                target="_blank"
                to="https://x.com/"
              >
                <img
                  src={twitter}
                  alt="socialIcon"
                  width={75}
                  height={75}
                  className="object-fill w-10 h-10"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#9c9a9a1a] mt-auto  text-section-${theme} flex  items-start justify-start  font-normal  py-6  text-[16px] sm:text-[15px]  w-full  px-[4%]`}
      >
        <p className="text-left">© Nike 2023-24. All Rights Reserved</p>
      </div>
    </footer>
  );
}
