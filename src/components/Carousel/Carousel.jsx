import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  }, [data.length]);

  const previousSlide = useCallback(() => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  }, [data.length]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      previousSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 4 seconds for more active feel

    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!data || !Array.isArray(data)) {
    console.error("Invalid data passed to Carousel component");
    return <div>Error: Invalid data</div>;
  }

  return (
    <div
      className="relative w-full sm:w-4/5 h-auto mx-auto mb-8 sm:mb-16 md:mb-20 pt-4 sm:pt-7 bg-blanky-yellow overflow-hidden cursor-pointer"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onClick={nextSlide}
    >
      <div className="relative w-full h-auto">
        {data.map((item, index) => {
          if (!item.src || !item.alt) {
            console.error(`Invalid item at index ${index}:`, item);
            return <div key={index}>Error: Invalid item</div>;
          }
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={index}
              className={`rounded-lg w-full h-auto transition-all duration-700 ease-in-out select-none object-cover ${
                slide === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 absolute top-0 left-0"
              }`}
              style={{
                boxShadow: "0px 0px 7px #EF7760",
                aspectRatio: "16/9",
              }}
              draggable="false"
            />
          );
        })}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
