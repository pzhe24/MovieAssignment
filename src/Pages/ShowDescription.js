import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Container, Button } from "react-bootstrap";
import moviesContext from "../context/moviesContext";
const ShowDescription = () => {
  const { id } = useParams();
  const { tvShows } = useContext(moviesContext);
  const curr = id - 1;

  return (
    <div>
      <Header />
      <div className="details-page">
        <Container>
          <Row xs={1} sm={1} md={1} lg={2} xl={2}>
            <Col>
              <img
                className="movie-poster"
                src={tvShows[curr].picture}
                alt={tvShows[curr].tvName}
              />
            </Col>
            <Col>
              <p className="title" style={{ color: "#A0BCF5" }}>
                {tvShows[curr].tvName}&emsp;
                <span class="text-info">({tvShows[curr].year})</span>
              </p>

              <p className="genres">
                Genres: {tvShows[curr].genres.join(", ")}
              </p>
              <p style={{ fontSize: "25px", color: "#A0BCF5" }}>Overview</p>
              <p className="description">{tvShows[curr].description}</p>
              <p style={{ fontSize: "20px", color: "#A0BCF5" }}>
                Number of Seasons
              </p>
              <p className="seasons">{tvShows[curr].seasons}</p>
              <p style={{ fontSize: "20px", color: "#A0BCF5" }}>
                Number of Episodes
              </p>
              <p className="episodes">{tvShows[curr].episodes}</p>

              <Button variant="primary" style={{ marginTop: "20px" }}>
                Rent: {tvShows[curr].rentPrice}
              </Button>
              <Button variant="primary" style={{ marginTop: "20px" }}>
                Buy Now: {tvShows[curr].buyPrice}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ShowDescription;
