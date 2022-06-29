import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedTV from "../components/FeaturedTV";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Homepage = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Hero />
      </div>
      <FeaturedMovies movies={props.movies} />
      <FeaturedTV tvShows={props.tvShows} />
      <Content />
      <Footer />
    </div>
  );
};

export default Homepage;
