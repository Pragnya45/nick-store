import { useTheme } from "../../Components/ThemeProvider";
import { shoes } from "../../utils/product";
import { ProductCard } from "../../Components/ProductCard";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col mt-14   items-center py-8 px-[4%]  relative h-fit post_swiper_container overflow-hidden w-full gap-2`}
    >
      <p
        className={`text-color-${theme} text-center text-[30px] font-bold`}
        data-aos="fade-right"
      >
        Shop
      </p>
      <div className="max-w-screen-xl w-full mx-auto">
        <div
          className="flex flex-wrap w-full gap-8 justify-center sm:justify-start"
          data-aos="zoom-in-up"
        >
          {shoes?.map((people, index) => (
            <ProductCard key={index} people={people} />
          ))}
        </div>
      </div>
    </div>
  );
}
