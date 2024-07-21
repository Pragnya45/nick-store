import { useTheme } from "./ThemeProvider";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function ProductCard({ people }) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/shop/${people?.id}`)}
      className="my-8 h-[20rem] sm:h-[28rem] w-[15rem] sm:w-[18rem] overflow-hidden cursor-pointer rounded-xl   bg-[#D9D9D920] shadow-shadow-1 transition-all duration-200 hover:-translate-y-1 "
    >
      <img
        src={people?.colorways[0]?.image}
        alt="product"
        width={400}
        height={400}
        className="w-full h-[10rem] sm:h-[18rem] rounded-xl hover:scale-110"
      />
      <div className="p-4">
        <p
          className={`font-inter text-color-${theme}  text-[#101828] font-semibold text-[20px]`}
        >
          {people?.name}
        </p>
        <p className="font-inter text-[#EC8000] font-normal text-[16px]">
          {people?.model}
        </p>
        <div className="flex items-center">
          <p className="font-inter text-[#667085] font-normal text-[13px]">
            {people?.rating}
          </p>
          <div className="flex ml-2 text-[#FFD700]">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
