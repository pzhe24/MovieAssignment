import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Col, Row, Container, Button } from "react-bootstrap";

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
    fetch(`https://cjv-movie-api.herokuapp.com/tvshows/${id}`)
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
      <div className="details-page">
        <Container>
          <Row xs={1} sm={1} md={1} lg={2} xl={2}>
            <Col>
              <img
                className="movie-poster"
                src={show.picture}
                alt={show.tvName}
              />
            </Col>
            <Col>
              <p className="title" style={{ color: "#A0BCF5" }}>
                {show.tvName}&emsp;
                <span class="text-info">({show.year})</span>
              </p>

              <p className="genres">Genres: {show.genres.join(", ")}</p>
              <p style={{ fontSize: "25px", color: "#A0BCF5" }}>Overview</p>
              <p className="description">{show.description}</p>
              <p style={{ fontSize: "20px", color: "#A0BCF5" }}>
                Number of Seasons
              </p>
              <p className="seasons">{show.seasons}</p>
              <p style={{ fontSize: "20px", color: "#A0BCF5" }}>
                Number of Episodes
              </p>
              <p className="episodes">{show.episodes}</p>

              <Button variant="primary" style={{ marginTop: "20px" }}>
                Rent: {show.rentPrice}
              </Button>
              <Button variant="primary" style={{ marginTop: "20px" }}>
                Buy Now: {show.buyPrice}
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
