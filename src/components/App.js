import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "../Pages/Homepage";
import Movies from "../Pages/Movies";
import MovieDescription from "../Pages/MovieDescription";
import ShowDescription from "../Pages/ShowDescription";
import Login from "../Pages/Login";
import Register from "../Pages/Registration";
import TVShows from "../Pages/TVShows";

import "../assets/css/App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVshows] = useState([]);

  useEffect(() => {
    //Async operation get/post, put or delete
    const fetchMovies = () => {
      fetch("https://cjv-movie-api.herokuapp.com/movies")
        .then((returnedData) => {
          return returnedData.json();
        })
        .then((data) => {
          setMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchMovies();

    const fetchTV = () => {
      fetch("https://cjv-movie-api.herokuapp.com/tvshows")
        .then((returnedData) => {
          return returnedData.json();
        })
        .then((data) => {
          setTVshows(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchTV();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage movies={movies} tvShows={tvShows} />}
          />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route path="/tv" element={<TVShows shows={tvShows} />} />
          <Route path="/movies/:id" element={<MovieDescription />} />
          <Route path="/tv/:id" element={<ShowDescription />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
