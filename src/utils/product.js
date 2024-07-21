import nikeInfinity from "../assets/images/nike-infinity.jpeg";
import nikePagasus from "../assets/images/nike-pegasus39-cover.jpg";
import nikefly from "../assets/images/nike-react-infinity-run-flyknit-3-cover.jpg";
import nikezoom from "../assets/images/nike-zoom.JPG";
import nikevapro from "../assets/images/Nike-VaporMax-Flyknit-2023-Black-DV1678-001-5.webp";
import video1 from "../assets/videos/AIR MAX 97  Nike Ad (Unofficial).mp4";
import nikePagasusvd from "../assets/videos/Nike Air Max 97 - Evolution (Animation).mp4";
import nikeflyVd from "../assets/videos/Nike Air Max 270 - Animation.mp4";
import nikezoomvd from "../assets/videos/Nike Commercial AirMax - 3D Animation (Element 3D).mp4";
import nikevaprovd from "../assets/videos/Nike Lava x Kront (Design inspired by DerekElliott).mp4";
import nikeAirmaxblack from "../assets/images/nike-air-max-black.jpg";
import nikeAirmaxwhite from "../assets/images/nike-air-max-white.jpg";
import nikeAirmaxvolt from "../assets/images/nike-air-max-volt.png";
import nikeAirpegasusblue from "../assets/images/nike-air-zoom-pegasus-blue.png";
import nikeAirpegasuspink from "../assets/images/nike-air-pegasus-pink.webp";
import nikeinfinityblackwhite from "../assets/images/nike-infinity-fly-black-white.png";
import nikeinfinitypink from "../assets/images/nike-react-infinity-fly-pink.jpg";
import nikelimelightVolt from "../assets/images/limelight-volt.png";
import vapromax from "../assets/images/vapromax-black.png";
import nikeuniverseRed from "../assets/images/nike-red.jpg";
import nikeuniverseblackwhite from "../assets/images/nike-air-max-universe-black-white.webp";
import nikefreernblack from "../assets/images/nike-free-rn-black.webp";
import nikefreernwhite from "../assets/images/nike-free-rn-white.jpg";
import nikeairforcewhite from "../assets/images/nike-air-force.jpg";
import nikeairforceblack from "../assets/images/uqNjJ7.jpg";
import nikehuaracheblackwhite from "../assets/images/nike-huarache-trainer-shoe-white.jpg";
import nikehuarachered from "../assets/images/s-l1600.jpg";
import nikejoyrideblack from "../assets/images/Nike-Joyride-Run-Flyknit-Black-White-AQ2730-001-Release-Date-4.jpg";
import nikejoyridecrimson from "../assets/images/s-l1200.jpg";

const shoes = [
  {
    id: "1",
    name: "Nike Air Max Infinity",
    model: "AM-INF24",
    price: 180,
    colorways: [
      {
        name: "Black",
        image: nikeAirmaxblack,
      },
      {
        name: "White",
        image: nikeAirmaxwhite,
      },
      {
        name: "Volt",
        image: nikeAirmaxvolt,
      },
    ],
    description:
      "The Nike Air Max Infinity redefines comfort and performance with its innovative design. Featuring a full-length Air Max unit for ultimate cushioning, targeted support for a secure fit, and a breathable mesh upper for optimal airflow, this shoe is perfect for runners and athletes seeking the perfect balance of comfort and performance.",
    features: [
      {
        name: "Responsive Cushioning",
        description:
          "The Air Max unit provides exceptional shock absorption and responsiveness for a smooth and comfortable ride.",
      },
      {
        name: "Targeted Support",
        description:
          "Strategic reinforcements in the upper offer a secure and supportive fit for confident strides.",
      },
      {
        name: "Breathable Upper",
        description:
          "Lightweight and breathable materials help keep your feet cool and dry during your runs.",
      },
    ],
    technology: [
      {
        name: "Air Max Unit",
        description:
          "Full-length Air Max unit for maximum cushioning and impact protection.",
      },
      {
        name: "Flyknit Upper",
        description:
          "Engineered knit upper provides lightweight support and breathability.",
      },
    ],
    bannerImage: nikeInfinity,
    video: video1,
    rating: 4.5,
    totalReviews: 320,
  },
  {
    id: "2",
    name: "Nike Zoom Pegasus 39",
    model: "ZP39-2024",
    price: 120,
    colorways: [
      {
        name: "Blue",
        image: nikeAirpegasusblue,
      },
      {
        name: "Pink",
        image: nikeAirpegasuspink,
      },
    ],
    description:
      "The Nike Zoom Pegasus 39 is a versatile running shoe that delivers a smooth and responsive ride. Its React foam midsole and Zoom Air unit provide cushioned comfort, while the breathable upper keeps your feet cool and comfortable. Whether you're training for a marathon or just going for a casual jog, the Pegasus 39 is a reliable choice.",
    features: [
      {
        name: "React Foam Midsole",
        description:
          "Offers a soft and springy feel for comfortable and responsive cushioning.",
      },
      {
        name: "Zoom Air Unit",
        description:
          "Provides additional responsiveness and energy return in the forefoot.",
      },
      {
        name: "Breathable Mesh Upper",
        description: "Lightweight and breathable for all-day comfort.",
      },
    ],
    technology: [
      {
        name: "React Foam",
        description:
          "A lightweight and durable foam that delivers a smooth and responsive ride.",
      },
      {
        name: "Zoom Air",
        description:
          "A responsive cushioning technology that provides a snappy and energetic feel.",
      },
    ],
    bannerImage: nikePagasus,
    video: nikePagasusvd,
    rating: 4.2,
    totalReviews: 210,
  },
  {
    id: "3",
    name: "Nike React Infinity Run Flyknit 3",
    model: "RIRFK3-2024",
    price: 160,
    colorways: [
      {
        name: "Black/White",
        image: nikeinfinityblackwhite,
      },
      {
        name: "Platinum/Pink",
        image: nikeinfinitypink,
      },
    ],
    description:
      "The Nike React Infinity Run Flyknit 3 is designed to help reduce injury and keep you running. Its high foam stack and rocker geometry provide a smooth and stable ride, while the Flyknit upper offers a comfortable and supportive fit. If you're looking for a shoe that can help you run longer and stronger, the React Infinity Run Flyknit 3 is a great option.",
    features: [
      {
        name: "High Foam Stack",
        description: "Offers plush cushioning and a soft feel underfoot.",
      },
      {
        name: "Rocker Geometry",
        description: "Promotes a smooth transition from heel to toe.",
      },
      {
        name: "Flyknit Upper",
        description: "Lightweight and breathable for a comfortable fit.",
      },
    ],
    technology: [
      {
        name: "React Foam",
        description:
          "A lightweight and durable foam that delivers a smooth and responsive ride.",
      },
      {
        name: "Flyknit",
        description:
          "An engineered knit upper that provides a comfortable and supportive fit.",
      },
    ],
    bannerImage: nikefly,
    video: nikeflyVd,
    rating: 4.7,
    totalReviews: 290,
  },
  {
    id: "4",
    name: "Nike Air Zoom Alphafly NEXT% 2",
    model: "AZAN2-2024",
    price: 275,
    colorways: [
      {
        name: "Limelight/Volt",
        image: nikelimelightVolt,
      },
    ],
    description:
      "The Nike Air Zoom Alphafly NEXT% 2 is a high-performance racing shoe designed for speed and efficiency. It features a ZoomX foam midsole with two Zoom Air pods in the forefoot for maximum responsiveness and energy return. The lightweight and breathable Atomknit upper provides a secure and comfortable fit, while the carbon fiber plate in the midsole helps to propel you forward with every stride.",
    features: [
      {
        name: "ZoomX Foam Midsole",
        description:
          "Nike's lightest and most responsive foam for exceptional cushioning and energy return.",
      },
      {
        name: "Zoom Air Pods",
        description:
          "Two Zoom Air pods in the forefoot provide additional responsiveness and cushioning.",
      },
      {
        name: "Atomknit Upper",
        description:
          "A lightweight and breathable knit upper that conforms to your foot for a secure and comfortable fit.",
      },
      {
        name: "Carbon Fiber Plate",
        description:
          "A stiff plate in the midsole that helps to propel you forward with every stride.",
      },
    ],
    technology: [
      {
        name: "ZoomX Foam",
        description:
          "Nike's lightest and most responsive foam for exceptional cushioning and energy return.",
      },
      {
        name: "Zoom Air",
        description:
          "A responsive cushioning technology that provides a snappy and energetic feel.",
      },
      {
        name: "Atomknit",
        description:
          "A lightweight and breathable knit upper that conforms to your foot for a secure and comfortable fit.",
      },
    ],
    bannerImage: nikezoom,
    video: nikezoomvd,
    rating: 4.8,
    totalReviews: 150,
  },
  {
    id: "5",
    name: "Nike Air Vapormax 2023 Flyknit",
    model: "AV23FK-2024",
    price: 210,
    colorways: [
      {
        name: "Triple Black",
        image: vapromax,
      },
    ],
    description:
      "The Nike Air Vapormax 2023 Flyknit combines innovative Air cushioning with a lightweight and breathable Flyknit upper. The full-length Vapormax Air unit provides a plush and responsive feel, while the Flyknit upper hugs your foot for a comfortable and secure fit. With its futuristic design and cutting-edge technology, the Vapormax 2023 Flyknit is the perfect shoe for those who want to make a statement and experience the future of footwear.",
    features: [
      {
        name: "Vapormax Air Unit",
        description:
          "Full-length Vapormax Air unit for lightweight cushioning and a bouncy feel.",
      },
      {
        name: "Flyknit Upper",
        description:
          "Engineered knit upper provides lightweight support, breathability, and a sock-like fit.",
      },
      {
        name: "Sustainable Materials",
        description: "Made with at least 20% recycled content by weight.",
      },
    ],
    technology: [
      {
        name: "Vapormax Air",
        description:
          "Nike's most innovative cushioning technology, providing a lightweight and responsive feel.",
      },
      {
        name: "Flyknit",
        description:
          "An engineered knit upper that provides a comfortable and supportive fit.",
      },
    ],
    bannerImage: nikevapro,
    video: nikevaprovd,
    rating: 4.6,
    totalReviews: 180,
  },
  {
    id: "6",
    name: "Nike Air Max 270",
    model: "AM270-2024",
    price: 150,
    colorways: [
      {
        name: "University Red",
        image: nikeuniverseRed,
      },
      {
        name: "Black/White",
        image: nikeuniverseblackwhite,
      },
    ],
    description:
      "The Nike Air Max 270 delivers visible Air cushioning under every step with its large Max Air unit in the heel. The stretchy inner sleeve provides a snug, sock-like fit, while the breathable mesh upper keeps you cool and comfortable. Perfect for everyday wear, the Air Max 270 offers a stylish and supportive option for all-day comfort.",
    features: [
      {
        name: "Max Air Unit",
        description:
          "Visible Air cushioning for superior comfort and impact protection.",
      },
      {
        name: "Stretchy Inner Sleeve",
        description: "Provides a snug, sock-like fit.",
      },
      {
        name: "Breathable Mesh Upper",
        description: "Lightweight and breathable for all-day comfort.",
      },
    ],
    technology: [
      {
        name: "Max Air",
        description:
          "Nike's iconic Air cushioning technology for superior comfort and impact protection.",
      },
      {
        name: "Mesh Upper",
        description: "Lightweight and breathable materials for comfort.",
      },
    ],
    bannerImage: "../assets/images/nike-infinity.jpeg",
    rating: 4.3,
    totalReviews: 200,
  },
  {
    id: "7",
    name: "Nike Free RN 5.0",
    model: "FRN5-2024",
    price: 100,
    colorways: [
      {
        name: "Black",
        image: nikefreernblack,
      },
      {
        name: "White",
        image: nikefreernwhite,
      },
    ],
    description:
      "The Nike Free RN 5.0 is designed for natural movement and flexibility, making it a great choice for short runs or everyday wear. The lightweight and breathable upper keeps your feet cool, while the flexible sole allows for a natural range of motion. With its minimalist design and comfortable fit, the Free RN 5.0 is perfect for those who value simplicity and comfort.",
    features: [
      {
        name: "Flexible Sole",
        description: "Allows for a natural range of motion and flexibility.",
      },
      {
        name: "Breathable Upper",
        description:
          "Lightweight and breathable materials keep your feet cool and comfortable.",
      },
      {
        name: "Minimalist Design",
        description: "Simple and sleek design for everyday wear.",
      },
    ],
    technology: [
      {
        name: "Free Sole",
        description:
          "Nike's innovative sole design for natural movement and flexibility.",
      },
      {
        name: "Mesh Upper",
        description: "Lightweight and breathable materials for comfort.",
      },
    ],
    bannerImage: "images/free-rn-5-banner.jpg",
    rating: 4.1,
    totalReviews: 150,
  },
  {
    id: "8",
    name: "Nike Air Force 1 '07",
    model: "AF1-07-2024",
    price: 90,
    colorways: [
      {
        name: "White",
        image: nikeairforcewhite,
      },
      {
        name: "Black",
        image: nikeairforceblack,
      },
    ],
    description:
      "The Nike Air Force 1 '07 is a timeless classic that combines style and comfort. With its iconic silhouette, durable leather upper, and cushioned midsole, the Air Force 1 '07 offers a stylish and comfortable option for everyday wear. Whether you're hitting the streets or heading to the gym, the Air Force 1 '07 is a versatile and reliable choice.",
    features: [
      {
        name: "Durable Leather Upper",
        description: "Provides a premium look and long-lasting durability.",
      },
      {
        name: "Cushioned Midsole",
        description: "Offers comfortable cushioning and support.",
      },
      {
        name: "Iconic Silhouette",
        description: "Classic design for timeless style.",
      },
    ],
    technology: [
      {
        name: "Air Cushioning",
        description:
          "Nike's Air technology for comfortable cushioning and support.",
      },
      {
        name: "Leather Upper",
        description: "Premium materials for durability and style.",
      },
    ],
    bannerImage: "images/air-force-1-07-banner.jpg",
    rating: 4.9,
    totalReviews: 400,
  },
  {
    id: "9",
    name: "Nike Air Huarache",
    model: "AH-2024",
    price: 110,
    colorways: [
      {
        name: "Black/White",
        image: nikehuaracheblackwhite,
      },
      {
        name: "University Red",
        image: nikehuarachered,
      },
    ],
    description:
      "The Nike Air Huarache delivers a snug, comfortable fit with its neoprene and spandex upper. The iconic heel strap and rubber cage provide support and stability, while the Air cushioning in the midsole ensures a smooth and comfortable ride. With its distinctive design and comfortable fit, the Air Huarache is perfect for those who want to stand out.",
    features: [
      {
        name: "Neoprene and Spandex Upper",
        description: "Provides a snug and comfortable fit.",
      },
      {
        name: "Heel Strap and Rubber Cage",
        description: "Offers support and stability.",
      },
      {
        name: "Air Cushioning",
        description: "Ensures a smooth and comfortable ride.",
      },
    ],
    technology: [
      {
        name: "Air Cushioning",
        description:
          "Nike's Air technology for comfortable cushioning and support.",
      },
      {
        name: "Neoprene Upper",
        description: "Flexible and comfortable materials for a snug fit.",
      },
    ],
    bannerImage: "images/air-huarache-banner.jpg",
    rating: 4.4,
    totalReviews: 250,
  },
  {
    id: "10",
    name: "Nike Joyride Run Flyknit",
    model: "JRFK-2024",
    price: 180,
    colorways: [
      {
        name: "Bright Crimson",
        image: nikejoyridecrimson,
      },
      {
        name: "Black/White",
        image: nikejoyrideblack,
      },
    ],
    description:
      "The Nike Joyride Run Flyknit features innovative bead-filled pods that adapt to your stride, providing personalized cushioning and a smooth ride. The Flyknit upper offers lightweight support and breathability, while the low-profile design ensures a natural feel. Perfect for runners looking for a comfortable and responsive shoe, the Joyride Run Flyknit delivers a unique running experience.",
    features: [
      {
        name: "Bead-Filled Pods",
        description: "Adapt to your stride for personalized cushioning.",
      },
      {
        name: "Flyknit Upper",
        description: "Provides lightweight support and breathability.",
      },
      {
        name: "Low-Profile Design",
        description: "Ensures a natural feel and smooth ride.",
      },
    ],
    technology: [
      {
        name: "Joyride Pods",
        description: "Innovative bead-filled pods for personalized cushioning.",
      },
      {
        name: "Flyknit",
        description:
          "An engineered knit upper that provides a comfortable and supportive fit.",
      },
    ],
    bannerImage: "images/joyride-run-flyknit-banner.jpg",
    rating: 4.6,
    totalReviews: 220,
  },
];

export { shoes };
