import React, { useEffect, useRef, useState } from "react";

export const Carousel = ({ images, path = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentSlide(index);
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll);

    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  const changeSlide = (direction) => {
    let nextSlide = direction === "left" ? currentSlide - 1 : currentSlide + 1;

    // Wrap around logic
    if (nextSlide < 0) nextSlide = images.length - 1;
    if (nextSlide >= images.length) nextSlide = 0;

    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: nextSlide * width,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative flex justify-center items-center w-full bg-[var(--color-dark-bg)] overflow-hidden h-[400px] lg:h-[700px]"
      ref={containerRef}
    >
      <ul
        className="flex w-full h-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <li
            className="flex-shrink-0 flex-grow-0 snap-start snap-always w-full h-full flex items-center justify-center"
            key={image}
            data-index={index}
          >
            <img
              src={`/images/projects/${image}`}
              alt=""
              loading="lazy"
              className="w-full h-full max-w-full max-h-full object-contain"
            />
          </li>
        ))}
      </ul>

      {/* Always show both arrows */}
      <button
        className="absolute top-1/2 -translate-y-1/2 flex justify-center items-center h-[26px] w-[26px] border-0 rounded-full text-[var(--color-primary)] bg-[var(--color-card-bg)] left-2 pr-[2px] hover:bg-[var(--color-card-bg)] hover:text-[var(--color-primary-dark)] transition-colors"
        onClick={() => changeSlide("left")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          height="16"
          width="16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        className="absolute top-1/2 -translate-y-1/2 flex justify-center items-center h-[26px] w-[26px] border-0 rounded-full text-[var(--color-primary)] bg-[var(--color-card-bg)] right-2 hover:bg-[var(--color-card-bg)] hover:text-[var(--color-primary-dark)] transition-colors"
        onClick={() => changeSlide("right")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          height="16"
          width="16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Slide indicator */}
      <span className="absolute right-2 bottom-2 py-1 px-2 bg-[var(--color-card-bg)] rounded-md text-[var(--color-muted)] text-[0.75rem] font-bold">
        {currentSlide + 1} / {images.length}
      </span>
    </div>
  );
};
