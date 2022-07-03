import { React, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import moviesContext from "../context/moviesContext";
const FeaturedTV = () => {
  const { tvShows } = useContext(moviesContext);
  return (
    <div>
      <Container>
        <h3 id="featuredTV-title">Featured TV Shows</h3>
        <Row xs={2} md={3} lg={6}>
          {tvShows.slice(0, 6).map((show) => (
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
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedTV;
