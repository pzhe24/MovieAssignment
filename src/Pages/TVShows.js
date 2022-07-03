import { React, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import moviesContext from "../context/moviesContext";
const TVShows = () => {
  const { tvShows } = useContext(moviesContext);
  return (
    <div className="list-movies">
      <Header />
      <Container className="text-center">
        <h3>All Shows</h3>
        <Row xs={3} md={4} lg={5}>
          {tvShows.map((show) => (
            <Col>
              <Link to={`/tv/${show.id}`}>
                <img
                  src={show.picture}
                  alt={show.tvName}
                  className="img-thumbnail"
                  width={200}
                  style={{ marginBottom: "15px" }}
                />
              </Link>
              <p>{show.tvName}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default TVShows;
