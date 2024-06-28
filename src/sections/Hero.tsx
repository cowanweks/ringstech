import "@styles/Hero.scss";
import Carousel from "@components/carousel/Carousel";


// Images
import Image1 from "@public/slides/slide1.jpg"
import Image2 from "@public/slides/HOME_E3_MX-KV_1440x810_pc.avif"
import Image3 from "@public/slides/HOME_E3_MX-KV_1440x810_pc.avif"
import Image4 from "@public/accessories/GM9n9u9W8AAX2l9.jpeg"

const slides = [
  {
    image: Image1,
    caption: "Slide 1"
  },
  {
    image: Image2,
    caption: "Slide 2"
  },
  {
    image: Image3,
    caption: "Slide 3"
  },
  {
    image: Image4,
    caption: "Slide 4"
  }
];

export default function Hero() {


  return (
    <div id="Hero" className="">
      <Carousel slides={slides} />
    </div>
  );
}
