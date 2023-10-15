import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

const NextJsCarousel = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://hotstarbackend.vercel.app/sliderdata")
      .then((response) => {
        setSliderData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log(sliderData);
  return (
    <div className="antriksh bg-blend-multiple">
      <Carousel infiniteLoop={true} autoPlay={true}>
        {sliderData.map((i) => (
          <div key={i.id}>
            <div className="h-auto m-20 flex">
              <div className="sm:hidden md:hidden lg:flex items-center">
                <div className="items-start justify-start flex flex-col">
                  <h1 className="text-4xl font-bold text-white">
                    {i.moviename}
                  </h1>
                  <h2 className="text-xl my-5 font-bold text-gray-500">
                    {i.year}
                  </h2>
                  <h1 className="text-2xl w-4/5 items-baseline text-gray-300">
                    {i.description}
                  </h1>
                </div>
              </div>
              <div className="h-full w-full">
                <img
                  className="rounded-xl w-full hover:scale-105 transition-all"
                  src={i.img}
                  alt="image1"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NextJsCarousel;
