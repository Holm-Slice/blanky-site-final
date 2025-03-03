import { Carousel } from "./Carousel/Carousel.jsx";
import AlbumArt from "./AlbumArt";
import { slides } from "./data/carouselData.json";
import WriteUp from "./WriteUp.jsx";

function Home() {
  return (
    <>
      <h1 className="header-font">Shoegaze from Lawrence Kansas</h1>
      <div id="home-page">
        <div className="carousel-div">
          <Carousel data={slides} />
        </div>
        <div className="bio">
          <br />
          {/* <WriteUp /> */}
          <h3 className="font">
            Blanky crafts lush, reverb-soaked soundscapes and introspective
            lyrics, blending Midwest melancholy with ethereal energy. Based in
            Lawrence, Kansas, and Kansas City, the band is a vibrant force in
            the local music scene, captivating shoegaze enthusiasts with their
            dreamy, immersive performances. Their music bridges heartfelt
            emotion and sonic exploration, carving a unique space in the
            regional and broader shoegaze landscape.
          </h3>
          <br />
        </div>

        <div>
          <h2 className="new-album-font">New album releasing soon...</h2>
          <AlbumArt />
        </div>
      </div>
    </>
  );
}

export default Home;
