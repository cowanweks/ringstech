import { useState, useEffect } from 'react';



export default function Carousel(props: { slides: Array<{ image: string, caption: string }> }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % props.slides.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel h-[56.25vw]">
            {props.slides.map((slide, index) => (
                <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                    <img src={slide.image} alt={`Slide ${index + 1}`} className='' />
                    <div className="carousel-caption z-20">{slide.caption} of {props.slides.length}</div>
                </div>
            ))}
        </div>
    );
};