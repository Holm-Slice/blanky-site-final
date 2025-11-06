import { Carousel } from "./Carousel/Carousel.jsx";
import AlbumArt from "./AlbumArt";
import { slides } from "./data/carouselData.json";

function Home() {
  return (
    <div className="bg-blanky-yellow">
      {/* Hidden SEO content for search engines only */}
      <div className="sr-only">
        <h1>Blanky - Shoegaze Punk Band from Lawrence, Kansas</h1>
        <p>
          Shoegaze, alternative rock, punk rock, DIY band from Lawrence Kansas,
          Kansas City, performing in Chicago, New York, Philadelphia, Los
          Angeles, San Diego, Midwest alternative music scene, dark orchestral,
          noise rock, indie shoegaze landscape
        </p>
      </div>

      {/* Visible content */}
      <div>
        <div className="bg-blanky-yellow">
          <Carousel data={slides} />
        </div>
        <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 bg-blanky-yellow text-center max-w-full my-8 sm:my-16 md:my-20">
          <h3 className="font-custom2 flex justify-center items-center text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed text-blanky-grey px-2">
            Blanky crafts lush, reverb-soaked soundscapes and introspective
            lyrics, blending Midwest melancholy with ethereal energy. Based in
            Lawrence, Kansas, and Kansas City, the band is a vibrant force in
            the local music scene, captivating shoegaze enthusiasts with their
            dreamy, immersive performances. Their music bridges heartfelt
            emotion and sonic exploration, carving a unique space in the
            regional and broader shoegaze landscape.
          </h3>
        </div>

        <div>
          <AlbumArt />
        </div>
      </div>
    </div>
  );
}

export default Home;
