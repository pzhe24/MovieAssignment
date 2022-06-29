import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Container, Button } from "react-bootstrap";

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
    fetch(`https://cjv-movie-api.herokuapp.com/movies/${id}`)
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
      <div className="details-page">
        <Container style={{ paddingBottom: "85px" }}>
          <Row xs={1} sm={1}>
            <Col className="col-lg-3 col-md-auto col-xs-1">
              <img
                className="movie-poster"
                src={movie.picture}
                alt={movie.tvName}
              />
            </Col>
            <Col className="col-lg-8 col-md-auto">
              <p className="title">
                {movie.movieName}&emsp;
                <span class="text-info">({movie.year})</span>
              </p>
              <p className="genres">
                Genres: {movie.genres.join(", ")}&emsp;&emsp;Runtime:{" "}
                {movie.length}
              </p>
              <p style={{ fontSize: "25px" }}>Overview</p>
              <p className="description">{movie.description}</p>

              <Button variant="primary" style={{ marginTop: "20px" }}>
                Rent: {movie.rentPrice}
              </Button>
              <Button variant="primary" style={{ marginTop: "20px" }}>
                Buy Now: {movie.buyPrice}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDescription;
