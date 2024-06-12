import "@styles/Hero.scss";
import Carousel from "@components/carousel/Carousel";

const slides = [
  {
    image: "https://via.placeholder.com/1920x1080",
    caption: "Caption for Slide 1"
  },
  {
    image: "https://via.placeholder.com/1920x1080/111",
    caption: "Caption for Slide 2"
  },
  {
    image: "https://via.placeholder.com/1920x1080/222",
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
