import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const albumData = [
  {
    id: 1,
    title: "Idols on the Wall",
    releaseDate: "June 28, 2025",
    bandcampId: "1217382296",
    description:
      "This album was recorded in Lawrence, KS by Blanky during the months of December 2023 - October 2024 with the exception of Periwinkle Blue Eyes which was recorded at Drop of Sun studios in Asheville, NC by Alex Farrar June 2023.",
    tags: [
      "alternative",
      "alt-country",
      "bedroom pop",
      "countrygaze",
      "garage",
      "indie",
      "lofi",
      "new wave",
      "shoegaze",
    ],
    tracks: [
      { name: "Robespierre", duration: "03:56" },
      { name: "Oh Frail Memory", duration: "04:13" },
      { name: "Lately I've Been", duration: "05:24" },
      { name: "Periwinkle Blue Eyes", duration: "02:37" },
      { name: "Haughty Little Flower", duration: "03:46" },
      { name: "That One's for Me", duration: "02:35" },
      { name: "Snifter of Poison", duration: "03:27" },
      { name: "Pig in Clover", duration: "03:46" },
    ],
  },
  {
    id: 2,
    title: "Blood Harmony",
    releaseDate: "December 15, 2022",
    bandcampId: "3013325932",
    description:
      "Blanky's new record 'Blood Harmony' was recorded on a half inch reel-to-reel tape machine in various locations around Lawrence, Kansas during multiple sessions from December of 2021 to April of 2022. The intent was to embrace a lo-fi recording production and to emulate some of the style and intimacy captured on select enduring analog classics.",
    tags: [
      "shoegaze",
      "alternative",
      "lawrence ks",
      "alt-country",
      "bedroom pop",
      "countrygaze",
      "kansas city",
      "new wave",
    ],
    tracks: [
      { name: "Third Estate", duration: "02:27" },
      { name: "Run Baby", duration: "03:13" },
      { name: "Friends Go Home", duration: "05:20" },
      { name: "The Real Thing", duration: "03:06" },
      { name: "See You Smile", duration: "02:55" },
      { name: "When I'm Not There", duration: "03:20" },
      { name: "Sleeve of Tricks", duration: "04:38" },
      { name: "Blood Harmony", duration: "04:29" },
      { name: "Somewhere In Secret", duration: "03:25" },
      { name: "Somewhere I'm Not", duration: "05:21" },
      { name: "Out The Window", duration: "03:50" },
      { name: "Girl", duration: "02:31" },
    ],
  },
];

const BandcampPlayer = () => {
  const [currentAlbum, setCurrentAlbum] = useState(0);
  const album = albumData[currentAlbum];

  const nextAlbum = () => {
    setCurrentAlbum((prev) => (prev + 1) % albumData.length);
  };

  const prevAlbum = () => {
    setCurrentAlbum((prev) => (prev - 1 + albumData.length) % albumData.length);
  };

  return (
    <div className="bg-blanky-yellow min-h-screen">
      {/* Navigation Header */}
      <div className="pt-4 sm:pt-6 md:pt-8 pb-4 text-center relative px-4">
        {/* Album Navigation */}
        <div className="mb-4 sm:mb-6">
          {/* Album Title */}
          <div className="text-center mb-4">
            <h2 className="font-custom2 text-2xl sm:text-3xl md:text-8xl text-blanky-red mb-20 sm:mb-36 font-light mt-12">
              {album.title}
            </h2>
          </div>

          {/* Artist/Release Info with Arrows */}
          <div className="flex items-center justify-center">
            <button
              onClick={prevAlbum}
              className="text-blanky-red hover:opacity-70 transition-all text-lg sm:text-xl mr-3 sm:mr-4"
              aria-label="Previous album"
            >
              <FaChevronLeft size={16} className="sm:w-5 sm:h-5" />
            </button>

            <div className="text-center">
              <p className="font-custom2 text-base sm:text-lg text-blanky-red">
                by{" "}
                <span className="text-blanky-red hover:underline cursor-pointer">
                  Blanky
                </span>
              </p>
              <p className="text-xs sm:text-sm text-blanky-red mt-1">
                Released {album.releaseDate}
              </p>
            </div>

            <button
              onClick={nextAlbum}
              className="text-blanky-red hover:opacity-70 transition-all text-lg sm:text-xl ml-3 sm:ml-4"
              aria-label="Next album"
            >
              <FaChevronRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Album Indicator Dots */}
        <div className="flex justify-center gap-2">
          {albumData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAlbum(index)}
              className={`w-2 h-2  transition-colors ${
                index === currentAlbum
                  ? "bg-blanky-red"
                  : "bg-blanky-red opacity-50"
              }`}
              aria-label={`Go to album ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Album Dashboard */}
      <div className="flex justify-center items-start w-full px-2 sm:px-4">
        <div className="w-full max-w-5xl">
          {/* Bandcamp Player */}
          <div className=" overflow-hidden mb-4 sm:mb-6 md:mb-8 flex justify-center">
            <iframe
              key={album.bandcampId} // Force re-render when album changes
              style={{
                border: 0,
                width: "100%",
                height: "400px",
                maxWidth: "700px",
              }}
              className="sm:h-[350px] md:h-[400px]"
              src={`https://bandcamp.com/EmbeddedPlayer/album=${album.bandcampId}/size=large/bgcol=000000/linkcol=EF7760/tracklist=true/artwork=small/`}
              seamless
              title={`${album.title} by Blanky`}
            >
              <a
                href={`https://blanky.bandcamp.com/album/${album.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/'/g, "")}`}
              >
                {album.title} by Blanky
              </a>
            </iframe>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Album Info Section */}
            <div className="bg-blanky-grey  p-4 sm:p-5 md:p-6">
              <h3 className="font-custom2 text-xl sm:text-2xl text-blanky-red mb-3 sm:mb-4">
                About
              </h3>
              <p className="text-blanky-red leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                {album.description}
              </p>
              <div className="text-xs sm:text-sm text-blanky-red">
                <p className="mb-1">Released {album.releaseDate}</p>
                <p>Lawrence, Kansas</p>
              </div>
            </div>

            {/* Track Listing */}
            <div className="bg-blanky-grey p-4 sm:p-5 md:p-6 flex flex-col">
              <h3 className="font-custom2 text-xl sm:text-2xl text-blanky-red mb-3 sm:mb-4">
                Track Listing
              </h3>
              <div className="space-y-1 sm:space-y-2 overflow-y-auto max-h-40 sm:max-h-48 md:max-h-52 pr-2 scrollbar-thin scrollbar-thumb-blanky-red scrollbar-track-blanky-grey">
                {album.tracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-blanky-red text-sm sm:text-base">
                      <span className="text-blanky-red mr-2">{index + 1}.</span>
                      {track.name}
                    </span>
                    <span className="text-blanky-red text-xs sm:text-sm">
                      {track.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div className="bg-blanky-grey border border-gray-200 p-4 sm:p-5 md:p-6 mt-4 sm:mt-6 md:mt-8">
            <h3 className="font-custom2 text-base sm:text-lg text-blanky-red mb-2 sm:mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {album.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-3 py-1 bg-blanky-red text-blanky-yellow text-xs sm:text-sm hover:opacity-80 duration-500  cursor-pointer transition-opacity"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandcampPlayer;
