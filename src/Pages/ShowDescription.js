import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ShowDescription = () => {
  const [show, setShow] = useState({
    id: 0,
    tvName: "",
    year: "",
    description: "",
    genres: [],
    seasons: 0,
    episodes: 0,
    picture: "",
    rentPrice: "",
    buyPrice: "",
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/tvshows/${id}`)
      .then((returnedData) => {
        return returnedData.json();
      })
      .then((data) => {
        setShow(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <Header />
      <p>
        <img src={show.picture} alt={show.tvName} />
      </p>
      <p>{show.tvName}</p>
      <p class="text-secondary">({show.year})</p>
      <p>{show.description}</p>
      <p>{show.genres.join(", ")}</p>
      <p>{show.seasons}</p>
      <p>{show.episodes}</p>
      <p>{show.rentPrice}</p>
      <p>{show.buyPrice}</p>
      <Footer />
    </div>
  );
};

export default ShowDescription;
