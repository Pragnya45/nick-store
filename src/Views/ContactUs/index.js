import { PrimaryButton } from "../../Components/Button";
import { useTheme } from "../../Components/ThemeProvider";

export default function ContactUs() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col mt-24 justify-center  items-center py-8 px-[4%]  relative h-fit post_swiper_container overflow-hidden w-full gap-2`}
    >
      <p
        className={`text-color-${theme} uppercase text-center text-[40px] font-bold`}
        data-aos="fade-right"
      >
        Contact US
      </p>
      <div className="max-w-screen-xl w-full mx-auto">
        <p
          className={`text-color-${theme} mt-4 text-center font-normal text-[16px]`}
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
      <p
        className={`text-color-${theme} mt-5 uppercase text-center text-[40px] font-bold`}
        data-aos="fade-right"
      >
        Ask a question
      </p>
      <div className="flex  sm:px-0 flex-col gap-4" data-aos="fade-left">
        <input
          className="border border-[#00a3ff] p-4 h-[3rem] bg-user-card2 outline-none rounded-md w-full sm:w-[25rem]"
          placeholder="Name"
        />
        <input
          className="border border-[#00a3ff] p-4 h-[3rem] bg-user-card2 outline-none rounded-md w-full sm:w-[25rem]"
          placeholder="Email"
        />
        <textarea
          className="border border-[#00a3ff] p-4 h-[10rem] bg-user-card2 outline-none rounded-md w-full sm:w-[25rem]"
          placeholder="Message"
        />
        <PrimaryButton
          title="Submit"
          className="w-full sm:w-[25rem] font-bold text-[20px]"
        />
      </div>
    </div>
  );
}
