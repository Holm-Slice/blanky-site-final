function AlbumArt() {
  return (
    <div className="w-full lg:w-3/5 mx-auto h-auto pt-0 pb-12">
      <img
        src="/assets/true-assets/Website-Files/idols on the wall.jpg"
        alt="Latest Album Art"
        className="max-w-full h-auto cursor-pointer hover:opacity-80 transition-opacity duration-300"
        onClick={() => {
          window.open("https://blanky.bandcamp.com/album/idols-on-the-wall");
        }}
      />
    </div>
  );
}

export default AlbumArt;
