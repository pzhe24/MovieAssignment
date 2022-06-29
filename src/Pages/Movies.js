import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Movies = ({ movies }) => {
  return (
    <div className="list-movies">
      <Header />
      <Container className="text-center">
        <h3>All Movies</h3>
        <Row xs={3} md={4} lg={5}>
          {movies.map((movie) => (
            <Col>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={movie.picture}
                  alt={movie.movieName}
                  className="img-thumbnail"
                  width={200}
                  style={{ marginBottom: "15px" }}
                />
              </Link>
              <p>{movie.movieName}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Movies;
