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
          <Row xs={1} sm={1}>
            <Col className="col-lg-3 col-md-auto col-xs-1">
              <img
                className="movie-poster"
                src={show.picture}
                alt={show.tvName}
              />
            </Col>
            <Col className="col-lg-8 col-md-auto">
              <p className="title">
                {show.tvName}&emsp;
                <span class="text-info">({show.year})</span>
              </p>

              <p className="genres">Genres: {show.genres.join(", ")}</p>
              <p style={{ fontSize: "25px" }}>Overview</p>
              <p className="description">{show.description}</p>
              <p style={{ fontSize: "20px" }}>Number of Seasons</p>
              <p className="seasons">{show.seasons}</p>
              <p style={{ fontSize: "20px" }}>Number of Episodes</p>
              <p className="episodes">{show.episodes}</p>

              <Button variant="primary">Rent: {show.rentPrice}</Button>
              <Button variant="primary">Buy Now: {show.buyPrice}</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ShowDescription;
