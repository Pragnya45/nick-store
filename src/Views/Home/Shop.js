import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import left from "../../assets/icons/arrow-left.svg";
import right from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";
import { shoes } from "../../utils/product";
import { useSelector } from "react-redux";
import { uiState } from "../../Redux/uiSlice";
import "./home.css";
import { ProductCard } from "../../Components/ProductCard";
import { useNavigate } from "react-router-dom";

function Shop() {
  const { theme } = useSelector(uiState);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-8 px-[4%] mt-8 relative h-fit post_swiper_container overflow-hidden w-full gap-2">
      <p
        className={`text-color-${theme} text-center text-[30px] font-bold`}
        data-aos="fade-right"
      >
        Collection
      </p>
      <div className="flex w-full mt-4">
        <Swiper
          centeredSlides={false}
          slidesPerView="auto"
          slidesPerGroup={2}
          loop={false}
          spaceBetween={35}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: "#button-next-collection",
            prevEl: "#button-prev-collection",
          }}
          modules={[Navigation]}
        >
          {shoes?.map((people, index) => (
            <SwiperSlide key={index}>
              <ProductCard people={people} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="slider-controller h-20 relative w-full mx-auto flex justify-center  items-center gap-4">
        <button
          className="cursor-pointer swiper-button-prev"
          id="button-prev-collection"
        >
          <img
            src={left}
            alt="left"
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </button>
        <button
          className="cursor-pointer swiper-button-next"
          id="button-next-collection"
        >
          <img
            src={right}
            alt="right"
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </button>
      </div>
      <button
        onClick={() => navigate("/shop")}
        className="w-[10rem] bg-[#00a3ff] rounded-md text-[16px] font-semibold text-white px-8 py-4"
      >
        View More
      </button>
    </div>
  );
}
export default Shop;
