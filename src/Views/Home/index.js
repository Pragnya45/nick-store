import Hero from "./Hero";
import Shop from "./Shop";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <div className="mt-14 gap-8">
      <Hero />
      <Shop />
      <Testimonial />
    </div>
  );
}
