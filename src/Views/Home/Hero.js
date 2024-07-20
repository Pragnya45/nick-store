import { shoes } from "../../utils/product";
import { Tooltip } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect, useRef } from "react";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import "./home.css";

function Hero() {
  const [showvideo, setShowvideo] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [muted, setMuted] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const container = document.getElementById("Container");

    const handleScroll = () => {
      setScrolling(true);

      if (scrolling) {
        setScrolling(false);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrolling]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowvideo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const handleVideoEnd = () => {
    console.log("called");
    setShowvideo(false);
    setTimeout(() => {
      setShowvideo(true);
    }, 3000);
    if (currentVideoIndex < shoes.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const swiperRef = useRef();
  useEffect(() => {
    if (swiperRef.current && currentVideoIndex < 5) {
      swiperRef.current.swiper.autoplay.stop();
    }
  }, [currentVideoIndex]);
  console.log(shoes);
  console.log(shoes[currentVideoIndex]?.bannerImage);
  console.log(showvideo);
  return (
    <div className="h-[90vh] w-full flex items-end relative">
      <img
        src={shoes[currentVideoIndex]?.bannerImage}
        showvideo={showvideo}
        alt="bannerImg"
        width={200}
        height={200}
        className={`h-full w-full object-cover ${
          showvideo ? "hidden" : "block"
        }`}
      />

      <video
        src={shoes[currentVideoIndex]?.video}
        controls={false}
        loop={false}
        autoPlay
        playsInline
        onEnded={() => handleVideoEnd()}
        muted={muted}
        className={`${
          showvideo ? "block" : "hidden"
        } h-full w-full object-cover`}
      />

      <div className="flex justify-between absolute w-full px-[2rem] py-[3rem]">
        <div className="w-[45%] gap-4 text-white relative flex flex-col items-start">
          <p className="text-[35px] font-bold bg-section-heading bg-clip-text text-transparent">
            {shoes[currentVideoIndex]?.name}
          </p>
          <p className="text-[25px] font-semibold">
            {shoes[currentVideoIndex]?.model}
          </p>

          <p className="text-[15px] font-medium">
            {shoes[currentVideoIndex]?.description}
          </p>

          <button className="w-[10rem] bg-[#00a3ff] rounded-md text-[16px] font-semibold text-white px-8 py-4">
            Shop Now
          </button>
        </div>
        <div className="flex flex-col w-[30%] mt-auto gap-8">
          <div className="ml-auto flex w-full items-end">
            {muted ? (
              <Tooltip title="Unmute">
                <BiVolumeMute
                  color="white"
                  size={32}
                  onClick={() => setMuted(!muted)}
                />{" "}
              </Tooltip>
            ) : (
              <Tooltip title="Mute">
                <GoUnmute
                  color="white"
                  size={32}
                  onClick={() => setMuted(!muted)}
                />
              </Tooltip>
            )}
          </div>
          <div className="flex h-[5rem] w-full">
            <Swiper
              centeredSlides={false}
              slidesPerView={"auto"}
              direction={"horizontal"}
              loop={false}
              spaceBetween={30}
              navigation={true}
              ref={swiperRef}
              autoplay={{
                delay: 100,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="swiper-container"
            >
              {shoes?.slice(0, 5)?.map((release, index) => (
                <SwiperSlide key={release.id} className="w-[98px]">
                  <div
                    className={` ${
                      index === currentVideoIndex ? "border border-white" : ""
                    } w-[98px] h-[60px] rounded-[6px] hover:scale-110`}
                    onClick={() => setCurrentVideoIndex(index)}
                  >
                    <img
                      src={release?.bannerImage}
                      alt="bannerimage"
                      width={98}
                      height={30}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
