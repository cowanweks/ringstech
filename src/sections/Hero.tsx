import "@styles/Hero.scss";
import Carousel from "@components/carousel/Carousel";
import Image1 from "@assets/galaxy-tab-s9-kv-pc.jpg"
import Image2 from "@assets/black-friday-concept-with-smartphone-cart-board_23-2147695916.avif"
import Image3 from "@assets/HOME_E3_MX-KV_1440x810_pc.avif"

const slides = [
  {
    image: Image1,
    caption: "Caption for Slide 1"
  },
  {
    image: Image2,
    caption: "Caption for Slide 2"
  },
  {
    image: Image3,
    caption: "Caption for Slide 3"
  }
];

export default function Hero() {


  return (
    <div id="Hero">
      <Carousel slides={slides} />
    </div>
  );
}
