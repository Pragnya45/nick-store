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
import "./home.css";

function Shop() {
  return (
    <div className="flex flex-col mt-8 relative h-fit post_swiper_container overflow-hidden w-full gap-2">
      <div className="flex w-full">
        <Swiper
          centeredSlides={false}
          slidesPerView="auto"
          slidesPerGroup={2}
          loop={false}
          spaceBetween={20}
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
      <div className="slider-controller h-20 relative flex items-center gap-4">
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
    </div>
  );
}
export default Shop;
export function ProductCard({ people }) {
  return (
    <div className="flex flex-col gap-2 max-w-[14rem] w-full">
      <img
        src={people?.image}
        width={400}
        height={400}
        className="w-full h-[18rem]"
      />
      <p className="font-inter text-[#101828] font-semibold text-[16px]">
        {people?.name}
      </p>
      <p className="font-inter text-[#EC8000] font-normal text-[14px]">
        {people?.position}
      </p>
      <p className="font-inter text-[#475467] font-normal text-[13px]">
        {people?.description}
      </p>
    </div>
  );
}
