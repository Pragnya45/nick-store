import React from "react";
import { useSelector } from "react-redux";
import { uiState } from "../../Redux/uiSlice";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import user1 from "../../assets/images/pexels-photo-415829.webp";
import user2 from "../../assets/images/social-media-profile-photos-3.webp";
import user3 from "../../assets/images/user-1.jpeg";
import user4 from "../../assets/images/user-2.webp";
import user5 from "../../assets/images/wp-2021-01-linkedin-profile-picture-focus-face.avif";
import user6 from "../../assets/images/240_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg";
import user7 from "../../assets/images/240_F_778563928_HogKMqnWfk8Uje0dYmivcJC8wohBWwwO.jpg";
import user8 from "../../assets/images/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg";
import user9 from "../../assets/images/istockphoto-1338134336-170667a.webp";
import user10 from "../../assets/images/360_F_477874414_kSQ9ip26804g8B3ItYsh5XsjNRgqf693.jpg";

function Testimonial() {
  const { theme } = useSelector(uiState);

  const reviews = [
    {
      name: "Jane Doe",
      date: "5/2/18",
      message:
        "These shoes are so pretty! The perfect color for summer and goes with any outfit. The adjustable shoe straps have a Velcro closure so you really get the perfect fit. They are very comfortable to walk in. I'm always on the lookout for the most comfortable walking shoe for summer... and I think this Dansko sandal fits the bill!",
      image: user1,
    },
    {
      name: "John Smith",
      date: "6/7/18",
      message:
        "Love these Naot sandals! I had another pair of Naot shoes and they are really comfortable so thought I would try these sandals. I think the Sophia is a classic sandal and I wouldn't be surprised if I was wearing them next summer too!",
      image: user2,
    },
    {
      name: "Alice Johnson",
      date: "4/21/18",
      message:
        "I was looking for a fun, stylish sneaker that I could take with me when I travel, and I found my perfect shoe. This All Black sneaker is lightweight, and super comfortable. This was an excellent purchase.",
      image: user3,
    },
    {
      name: "Bob Brown",
      date: "8/10/18",
      message:
        "If a casual summer walking shoe married a beautiful, fancy dress shoe, this would be their baby! This sneaker is SO COMFORTABLE you'll want to wear it every day - and why not? It’s sparkly and gorgeous and fun - great for daytime with jeans, or a cute little summer dress for night. These All Black shoes are my new favorite travel companion - classic shape, great for walking, and so stylish!",
      image: user4,
    },
    {
      name: "Catherine Green",
      date: "10/12/18",
      message:
        "These whimsical little boots are terrific. Bought them for traveling in Europe because it seemed like they would look good in either a casual and more dressy situation, which they did. They are very high-quality, and stylish. Also, these, like other Arcopedicos, are generous in the toe box, so you can move your toes. I have worn them with thick socks and with tights, and both work. These have become my default footwear for what I just throw on to feel comfortable....",
      image: user5,
    },
    {
      name: "David White",
      date: "10/24/18",
      message:
        "I just purchased these and love them! Very comfortable with cushioning and fit true to size. I just wanted some Asic Onitsuka Tiders classic black sneakers I could comfortably walk in for several hours at a time for travel, and they fit the bill. Plus, they are super stylish and retro. Will buy in another color as well since they're so comfortable.",
      image: user6,
    },
    {
      name: "Emma Black",
      date: "5/18/18",
      message:
        "I LOVE THESE BEAUTIFEEL SHOES. They are the perfect casual, comfortable sandal. On top of feeling like you are walking on a cloud, they are soooo stylish. They are a great purchase!",
      image: user7,
    },
    {
      name: "Frank Wilson",
      date: "9/9/18",
      message:
        "These are a fun pair of shoes! I love the metallic accent on the heel, and this makes a great outfit even more stylish. And to top it all off, they are just SO COMFORTABLE. This a purchase you won't regret making!",
      image: user8,
    },
    {
      name: "Grace Harris",
      date: "11/23/18",
      message:
        "This is a beautiful, stylish dress shoe, the heel size is not too high and fit my wide feet fairly well. I can wear them for long periods of standing and walking, and with the high-quality material and design, I know that Beautifeel shoes will last!",
      image: user9,
    },
    {
      name: "Henry Martin",
      date: "12/4/18",
      message:
        "This is an adorable, and comfortable shoes from BeautiFeel. Great for work or casual days! Very high-quality. I've owned many Beautifeel shoes and they are definitely worth the price.",
      image: user10,
    },
  ];

  return (
    <div className="flex flex-col w-full px-[10%]">
      <p
        className={`text-color-${theme} text-center text-[30px] font-bold`}
        data-aos="fade-right"
      >
        Testimonial
      </p>
      {/* <div className="relative  mx-auto mt-8 flex max-w-screen-lg flex-wrap justify-center gap-7 px-4"> */}
      <div className="flex flex-col mt-8 max-w-screen-lg mx-auto w-full gap-8px">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="16px">
            {reviews?.map((messages, index) => (
              <div
                className="w-full max-w-[312px] bg-user-card2 h-fit rounded-2xl border border-[#7184FD]  px-[2.5rem] py-16 backdrop-blur transition-all duration-200 hover:scale-105"
                key={index}
                data-aos="zoom-in-up"
              >
                <p className={`text-color-${theme} text-[15px] font-medium`}>
                  "{messages?.message}"
                </p>
                <div className="flex mt-6 items-center gap-2 text-black border-black  rounded-[20px]">
                  <img
                    src={messages?.image}
                    alt="userImg"
                    className="rounded-full w-8 h-8"
                  />
                  <div className="flex flex-col">
                    <p
                      className={`bg-heading-color-${theme} bg-clip-text text-transparent font-normal text-[18px]`}
                    >
                      {messages?.name}
                    </p>
                    <p className="text-[18px] font-normal text-[#B0BEC5]">
                      {messages?.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Testimonial;
