import React, { useEffect, useState } from "react";
import Cards from "./components/Cards.jsx";
import MainSlider from "./components/MainSlider.jsx";
import Navbar from "./components/Navbar.jsx";
import axios from "axios";

export default function index() {
  const [CardImages, setCardImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://hotstarbackend.vercel.app/cardImages")
      .then((response) => {
        setCardImages(response.data);
      })
      .catch((error) => {
        console.error("error while fetching cardImages", error);
      });
  }, []);

  return (
    <div className="bg-gray-900 h-max text-white">
      <Navbar />
      <MainSlider />
      <Cards CardImages={CardImages} name="Drama Shows" />
      <Cards CardImages={CardImages} name="Popular Shows" />
      <Cards CardImages={CardImages} name="Crime Shows" />
    </div>
  );
}
