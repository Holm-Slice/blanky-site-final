import { Carousel } from "./Carousel/Carousel.jsx";
import AlbumArt from "./AlbumArt";
import { slides } from "./data/carouselData.json";
import WriteUp from "./WriteUp.jsx";

function Home() {
  return (
    <>
      <div id="home-page">
        <div className="carousel-div">
          <Carousel data={slides} />
        </div>
        <div className="bio">
          <br />
          <WriteUp />
          <br />
        </div>
        <div className="latest-album-art">
          <AlbumArt />
        </div>
      </div>
    </>
  );
}

export default Home;
