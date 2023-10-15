import axios from "axios";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function cards({ CardImages, name }) {
  const manageFavs = (cardId) => {
    axios({
      url: "https://hotstarbackend.vercel.app/AddToFavs?cardId=" + cardId,
      method: "GET",
      headers: {
        token: sessionStorage.getItem("token"),
      },
    })
      .then(() => {})
      .catch(console.error);
  };
  return (
    <div className="overflow-y-hidden">
      <h2 className="flex flex-row m-10 text-4xl font-bold ">{name}</h2>
      <div className="flex  m-10 ">
        {!!CardImages &&
          CardImages.map((cardItem) => {
            return (
              <div className="m-1" key={cardItem._id}>
                <div className=" justify-content-evenly items-center ">
                  <img
                    className="z-10 h-80 m-1 rounded-lg"
                    src={cardItem.image}
                    alt=""
                  />
                  <button onClick={() => manageFavs(cardItem._id)}>
                    Add To Favs
                  </button>
                  <h1 className=" text-5xl">{cardItem.description}</h1>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
