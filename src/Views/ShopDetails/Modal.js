import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useTheme } from "../../Components/ThemeProvider";
import { PrimaryButton } from "../../Components/Button";

export default function Modal({
  setShowpopup,
  content,
  selectedColorWay,
  selectedsize,
}) {
  const { theme } = useTheme();

  console.log({ content });
  return (
    <div
      onClick={() => setShowpopup(false)}
      className="bg-[#00000050] fixed top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center z-10"
    >
      <div
        className={`w-full sm:w-[35%] bg-color-${theme} h-full overflow-y-auto gap-4 flex    absolute  right-0  flex-col items-center justify-start rounded-lg shadow-lg `}
      >
        <button
          onClick={() => setShowpopup(false)}
          className="absolute top-3 right-3 z-10"
        >
          <IoIosCloseCircleOutline
            size={30}
            color={theme === "dark" ? "white" : "black"}
          />
        </button>
        <div className="flex w-full items-start mt-12 flex-col p-10">
          <p className="text-[#EC8000] font-semibold text-[18px]">
            Item Added to Your Cart!
          </p>
          <div className="flex flex-col sm:flex-row mt-10 gap-4">
            <img
              src={selectedColorWay?.image}
              className="shadow-shadow-1 object-cover w-[8rem] h-[10rem]"
              alt="img"
            />
            <div className="flex flex-col">
              <p
                className={`font-inter text-color-${theme} font-semibold text-[20px]`}
              >
                {content?.name}
              </p>
              <p className="font-inter text-[#EC8000] font-normal text-[15px]">
                {content?.model}
              </p>
              <p className={`text-color-${theme} font-medium text-[16px]`}>
                Color: {selectedColorWay?.name}
              </p>
              <p className={`text-[#00a3ff] mt-2 font-medium text-[16px]`}>
                Size: {selectedsize}
              </p>
              <p className={`text-color-${theme} mt-2 font-medium text-[16px]`}>
                Quantity: 1
              </p>
            </div>
          </div>
        </div>
        <div className="border-slate-500 pb-12 pt-4 gap-4 px-10 w-full flex flex-col items-center mt-auto border-t">
          <div className="flex w-full justify-between">
            <p
              className={`font-inter text-color-${theme} font-semibold text-[16px] sm:text-[20px]`}
            >
              SubTotal Price:
            </p>
            <p
              className={`font-inter text-color-${theme} font-semibold text-[16px] sm:text-[20px]`}
            >
              Rs.{content?.price}.00
            </p>
          </div>
          <PrimaryButton
            title="Proceed to checkout"
            className="w-[18rem] uppercase text-[20px] font-bold"
          />
        </div>
      </div>
    </div>
  );
}
