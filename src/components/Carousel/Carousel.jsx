// import React from "react";
// import { useState } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import "./Carousel.css";

// export const Carousel = ({ data }) => {
//   const [slide, setSlide] = useState(0);
//   const nextSlide = () => {
//     setSlide(slide === data.length - 1 ? 0 : slide + 1);
//   };
//   const previousSlide = () => {
//     setSlide(slide === 0 ? data.length - 1 : slide - 1);
//   };
//   if (!data || !Array.isArray(data)) {
//     console.error("Invalid data passed to Carousel component");
//     return <div>Error: Invalid data</div>;
//   }

//   return (
//     <div className="carousel">
//       <BsArrowLeftCircleFill
//         className="arrow arrow-left"
//         onClick={previousSlide}
//       />
//       {data.map((item, index) => {
//         if (!item.src || !item.alt) {
//           console.error(`Invalid item at index ${index}:`, item);
//           return <div key={index}>Error: Invalid item</div>;
//         }
//         return (
//           <img
//             src={item.src}
//             alt={item.alt}
//             key={index}
//             className={slide === index ? "slide" : "slide slide-hidden"}
//           />
//         );
//       })}
//       <BsArrowRightCircleFill
//         className="arrow arrow-right"
//         onClick={nextSlide}
//       />
//       <span className="indicators">
//         {data.map((_, index) => {
//           return (
//             <button
//               key={index}
//               onClick={() => setSlide(index)}
//               className={
//                 slide === index ? "indicator" : "indicator indicator-inactive"
//               }
//             ></button>
//           );
//         })}
//       </span>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  const previousSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Clear interval on component unmount
  }, [slide]); // Re-run the effect when slide changes

  if (!data || !Array.isArray(data)) {
    console.error("Invalid data passed to Carousel component");
    return <div>Error: Invalid data</div>;
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={previousSlide}
      />
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
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={
              slide === index ? "indicator" : "indicator indicator-inactive"
            }
          ></button>
        ))}
      </span>
    </div>
  );
};
