import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Container, Button } from "react-bootstrap";
import moviesContext from "../context/moviesContext";

const MovieDescription = () => {
  const { id } = useParams();
  const { movies } = useContext(moviesContext);
  const curr = id - 1;

  return (
    <div>
      <Header />
      <div className="details-page">
        <Container style={{ paddingBottom: "65px" }}>
          <Row xs={1} sm={1} md={1} lg={2} xl={2}>
            <Col>
              <img
                className="movie-poster"
                src={movies[curr].picture}
                alt={movies[curr].tvName}
              />
            </Col>
            <Col>
              <p className="title" style={{ color: "#A0BCF5" }}>
                {movies[curr].movieName}&emsp;
                <span class="text-info">({movies[curr].year})</span>
              </p>
              <p className="genres">
                Genres: {movies[curr].genres.join(", ")}&emsp;&emsp;Runtime:{" "}
                {movies[curr].length}
              </p>
              <p style={{ fontSize: "25px", color: "#A0BCF5" }}>Overview</p>
              <p className="description">{movies[curr].description}</p>

              <Button variant="primary" style={{ marginTop: "20px" }}>
                Rent: {movies[curr].rentPrice}
              </Button>
              <Button variant="primary" style={{ marginTop: "20px" }}>
                Buy Now: {movies[curr].buyPrice}
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
