import { React, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import moviesContext from "../context/moviesContext";
const FeaturedMovies = () => {
  const { movies } = useContext(moviesContext);
  return (
    <div>
      <Container>
        <h3 id="featuredmovie-title">Featured Films</h3>
        <Row xs={2} md={3} lg={6}>
          {movies.slice(6, 12).map((movie) => (
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
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedMovies;
