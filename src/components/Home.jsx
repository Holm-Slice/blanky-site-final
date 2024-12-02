import { Carousel } from "./Carousel/Carousel.jsx";
import AlbumArt from "./AlbumArt";
import { slides } from "./data/carouselData.json";
import WriteUp from "./WriteUp.jsx";

function Home() {
  return (
    <>
      <h1 className="font">Shoegaze from Lawrence Kansas</h1>
      <div id="home-page">
        <div className="carousel-div">
          <Carousel data={slides} />
        </div>
        <div className="bio">
          <br />
          <WriteUp />
          <br />
        </div>

        <div>
          <h2 className="font">New album releasing soon!</h2>
          <AlbumArt />
        </div>
      </div>
    </>
  );
}

export default Home;
