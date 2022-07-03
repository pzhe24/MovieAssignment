import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedMovies from "../components/FeaturedMovies";
import FeaturedTV from "../components/FeaturedTV";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Hero />
      </div>
      <FeaturedMovies />
      <FeaturedTV />
      <Content />
      <Footer />
    </div>
  );
};

export default Homepage;
