// import { Spotify } from "react-spotify-embed";

const BandcampPlayer = () => {
  return (
    <div id="media-player">
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe style="border: 0; width: 400px; height: 600px;" src="https://bandcamp.com/EmbeddedPlayer/album=3013325932/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://blanky.bandcamp.com/album/blood-harmony">Blood Harmony by Blanky</a></iframe>`,
        }}
      />
    </div>
  );
};

export default BandcampPlayer;
