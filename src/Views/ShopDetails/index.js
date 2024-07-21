import { useParams } from "react-router-dom";
import { useTheme } from "../../Components/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { shoes } from "../../utils/product";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import review from "../../assets/images/verified.png";
import { PrimaryButton } from "../../Components/Button";
import Modal from "./Modal";

export default function ShopDetails() {
  const { id } = useParams();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [shoeData, setShoeData] = useState(null);
  const [selectedColorWay, setSelectedColorWay] = useState();
  const [selectedsize, setSelectedsize] = useState("6");
  const [showPopup, setShowpopup] = useState(false);

  useEffect(() => {
    const foundShoe = shoes.find((shoe) => shoe.id === id);
    setShoeData(foundShoe);
    setSelectedColorWay(foundShoe?.colorways[0]);
  }, [id]);
  if (!shoeData) {
    return <div>Shoe not found</div>;
  }
  const sizeList = ["6", "7", "8", "9", "10"];
  return (
    <div className="flex flex-col mt-14 pt-12 px-4 sm:px-[8%] w-full  gap-8">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 w-full">
        {shoeData.colorways && shoeData.colorways[0] && (
          <img
            src={selectedColorWay?.image}
            className="shadow-shadow-1 object-cover h-[20rem] sm:h-[40rem] w-full sm:w-[40%]"
            alt="img"
          />
        )}
        <div className="flex gap-2 flex-col">
          <p
            className={`font-inter text-color-${theme} font-semibold text-[30px]`}
          >
            {shoeData?.name}
          </p>
          <p className="font-inter text-[#EC8000] font-normal text-[18px]">
            {shoeData?.model}
          </p>
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <FaStar size={23} color="#FFD700" />
              <p
                className={`font-inter  ml-1 text-color-${theme} font-medium text-[16px]`}
              >
                {shoeData?.rating}/5
              </p>
            </div>
            <div className="flex items-center">
              <img src={review} alt="review" className="w-8 h-8" />
              <p className={`  text-color-${theme} font-medium text-[16px]`}>
                {shoeData?.review} reviews
              </p>
            </div>
          </div>
          <div className="">
            <p className="font-inter text-[#EC8000] font-medium text-[30px]">
              Rs. {shoeData?.price}.00
            </p>
            <p className="font-inter ml-2 text-[#667085] font-normal text-[13px]">
              (Inclusive all taxes)
            </p>
          </div>
          <p className={`text-color-${theme} font-medium text-[16px]`}>
            Color: {selectedColorWay?.name}
          </p>
          <div className="flex  gap-3">
            {shoeData.colorways && shoeData.colorways?.length
              ? shoeData.colorways?.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedColorWay(color)}
                    className={`${
                      selectedColorWay?.name === color?.name
                        ? "border-2 border-[#00a3ff]"
                        : ""
                    } rounded-lg cursor-pointer w-[70px] h-[100px]`}
                  >
                    <img
                      src={color?.image}
                      alt={color?.name}
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                ))
              : null}
          </div>
          <p className={`text-color-${theme} mt-2 font-medium text-[16px]`}>
            Size: {selectedsize}
          </p>
          <div className="flex flex-wrap w-full  mt-2 gap-3">
            {sizeList.map((size, index) => (
              <div
                key={index}
                onClick={() => setSelectedsize(size)}
                className={`${
                  selectedsize === size
                    ? " border-[#00a3ff]"
                    : "border-[#667085]"
                } rounded-lg bg-user-card grow text-center border-2 text-color-${theme} cursor-pointer w-[90px] h-[50px] flex justify-center items-center`}
              >
                UK - {size}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-5">
            <PrimaryButton
              title="Add to cart"
              onClick={() => setShowpopup(true)}
              className="text-[14px] font-semibold uppercase"
            />
            <PrimaryButton
              title="Buy Now"
              className="text-[14px] font-semibold uppercase"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-3">
        <p
          className={`font-inter pb-3  text-color-${theme} font-semibold text-[20px]`}
        >
          Description
        </p>
        <p className={` text-color-${theme} font-normal text-[14px]`}>
          {shoeData?.description}
        </p>
      </div>
      <div className="flex flex-col  gap-3">
        <p
          className={`font-inter pb-3  text-color-${theme} font-semibold text-[20px]`}
        >
          Technology
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {shoeData?.technology?.map((tech, index) => (
            <div
              className="flex flex-col items-center p-4 w-[18rem] rounded-md border bg-user-card border-[#667085] shadow-lg"
              key={index}
            >
              <p className=" text-[#EC8000] font-medium text-[20px]">
                {tech?.name}
              </p>
              <p
                className={` text-color-${theme} text-center font-normal text-[14px]`}
              >
                {tech?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col  gap-3">
        <p
          className={`font-inter pb-3  text-color-${theme} font-semibold text-[20px]`}
        >
          Features
        </p>
        <ul className="list-none items-start p-4  rounded-md bg-user-card ">
          {shoeData?.technology?.map((tech, index) => (
            <li className="p-4" key={index}>
              <div className="flex flex-col items-center sm:items-start">
                <p className=" text-[#EC8000] text-left font-medium text-[20px]">
                  {tech?.name}
                </p>
                <p
                  className={` text-color-${theme} text-center font-normal text-[14px]`}
                >
                  {tech?.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showPopup && (
        <Modal
          content={shoeData}
          selectedColorWay={selectedColorWay}
          selectedsize={selectedsize}
          setShowpopup={setShowpopup}
        />
      )}
    </div>
  );
}
