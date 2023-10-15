import React, { useEffect, useState } from "react";
import Navbar from "../pages/components/Navbar";
import Cards from "../pages/components/Cards";
import axios from "axios";

export default function list() {
  const [CardImages, setCardImages] = useState([]);

  useEffect(() => {
    axios({
      url: "https://hotstarbackend.vercel.app/GetMyFavouriteCards",
      method: "GET",
      headers: {
        token: sessionStorage.getItem("token"),
      },
    })
      .then((response) => {
        setCardImages(response.data.data);
        console.log("chal gyi");
      })
      .catch((error) => {
        console.error("error while fetching cardImages", error);
        console.log("nhi chli");
      });
  }, []);

  return (
    <div className="bg-gray-900 h-max text-white">
      <Navbar />
      {/* <MainSlider /> */}
      <Cards name="Drama Shows" CardImages={CardImages} />
    </div>
  );
}
