import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MovieDescription = () => {
  const [movie, setMovie] = useState({
    id: 0,
    movieName: "",
    year: "",
    description: "",
    genres: [],
    length: "",
    picture: "",
    rentPrice: "",
    buyPrice: "",
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((returnedData) => {
        return returnedData.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <Header />
      <p>
        <img src={movie.picture} alt={movie.tvName} />
      </p>
      <p>{movie.tvName}</p>
      <p>{movie.description}</p>
      <p>{movie.genres.join(", ")}</p>
      <p>{movie.seasons}</p>
      <p>{movie.episodes}</p>
      <p>{movie.rentPrice}</p>
      <p>{movie.buyPrice}</p>
      <Footer />
    </div>
  );
};

export default MovieDescription;
